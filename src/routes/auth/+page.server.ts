import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { SignInResponse } from "../../types/responses/signin";
import axios from "axios";
import { formatURL } from "../../utils/urlFormatter";
import { get } from "svelte/store";
import { BASEURL } from "../../store/appSettingsStore";
export const load: PageServerLoad = async () => {};

export const actions: Actions = {
  default: async (event) => {
    event.cookies.delete("auth", { path: "/" });
    const fd = await event.request.formData();
    const email = fd.get("email");
    const password = fd.get("password");
    const { data }: { data: SignInResponse } = await axios.post(
      formatURL(get(BASEURL), "/user/signin"),
      {
        email,
        password,
      }
    );
    console.log(data);
    if (data && data.code === "success") {
      event.cookies.set("auth", data.jwt, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 1000, // 1000 days
      });
      if (data.type === "admin" || data.type === "superadmin") {
        return redirect(303, "/admin");
      } else {
        return redirect(303, "/client");
      }
    } else {
      return fail(400, {
        description: "Invalid Credentials",
      });
    }
  },
};
