/**
 * Base URL for Storage Material REST API (projects, quotes, static content, etc.).
 *
 * @example https://domain.com/api/v1
 */
export function getRestApiBaseUrl(): string {
  return String(process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");
}
