export function formatURL(baseUrl: string, subroute: string): string {
  // Trim any leading or trailing slashes from both baseUrl and subroute
  const trimmedBaseUrl = baseUrl.replace(/\/+$/, "");
  const trimmedSubroute = subroute.replace(/^\/+/, "");

  // Combine the trimmed base URL with the trimmed subroute
  return `${trimmedBaseUrl}/${trimmedSubroute}`;
}
