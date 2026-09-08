"use client";

import { useQuery } from "@tanstack/react-query";

export type ContactDetails = {
  _id?: string;
  name?: string;
  instagram?: string;
  google?: string;
  youtube?: string;
  apple?: string;
  fb?: string;
  linkedIn?: string;
  linkedin?: string;
  twitter?: string;
  address?: string;
  email?: string;
  phone?: string;
  compliancePhone?: string;
  onboardingPhone?: string;
  customerCarePhone?: string;
  generalEnquiryPhone?: string;
  telePhone?: string;
  map?: string;
  mapLink?: string;
  copyRight?: string;
};

export function useContactDetails() {
  return useQuery<ContactDetails | null, unknown>({
    queryKey: ["contact-details"],
    queryFn: async () => {
      const res = await fetch("/api/contact");
      if (!res.ok) return null;
      const json = await res.json();
      return json?.data ?? null;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default useContactDetails;

