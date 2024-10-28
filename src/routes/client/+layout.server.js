export function load({ locals }) {
  return {
    userEmail: locals.user?.emailId,
  };
}
