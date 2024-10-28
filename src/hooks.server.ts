import { redirect, type Handle } from "@sveltejs/kit";
import { authenticateUser } from "./utils/authenticateUser";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = await authenticateUser(event); // obj built when a request comes in and is destroyed when the request leaves
  console.log(event.locals.user);
  if (event.url.pathname.startsWith("/admin")) {
    if (!event.locals.user) {
      throw redirect(303, "/noaccess");
    }
    if (event.locals.user.type !== "admin") {
      throw redirect(303, "/noaccess");
    }
  }

  const response = await resolve(event);
  return response;
};
