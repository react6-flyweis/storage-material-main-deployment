"use server";

import { getRestApiBaseUrl } from "@/lib/rest-api-base";

export async function getContactDetails() {
  try {
    const base = getRestApiBaseUrl();
    const url = `${base}/static/viewContactDetails`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (e) {
    return null;
  }
}

export default getContactDetails;
