export interface SignInResponse {
  code: string;
  jwt: string;
  dept: string;
  email: string;
  type: "admin" | "superadmin" | "user"; // Adjust as needed based on possible types
}
