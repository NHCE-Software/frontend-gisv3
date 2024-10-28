import type { RequestEvent } from "@sveltejs/kit";
import type { User } from "../types/locals/user";
import axios from "axios";
import { formatURL } from "./urlFormatter";

export async function authenticateUser(
  event: RequestEvent
): Promise<User | null> {
  const { cookies } = event;
  const userToken = cookies.get("auth");

  const { data } = await axios.post(
    formatURL(import.meta.env.VITE_BASEURL, "/user/authenticate"),
    {
      token: userToken,
    }
  );
  if (data && userToken) {
    return {
      jwt: userToken,
      department: data.department,
      emailId: data.emailId,
      type: data.type,
    };
  }
  return null;
}
