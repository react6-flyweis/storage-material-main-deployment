import { z } from "zod";

// Step 1: Building Type Schema
export const buildingTypeSchema = z.object({
  buildingType: z.string().min(1, "Please select a building type"),
});

// Step 2: Dimensions Schema
export const dimensionsSchema = z.object({
  width: z.string().min(1, "Width is required"),
  length: z.string().min(1, "Length is required"),
  height: z.string().min(1, "Height is required"),
  roofPitch: z.string().min(1, "Roof pitch is required"),
});

// Step 3: Location Schema
export const locationSchema = z.object({
  postalCode: z
    .string()
    .min(1, "Postal code is required")
    .regex(
      /^[0-9]{5}(-[0-9]{4})?$|^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      "Please enter a valid US ZIP code (e.g., 12345 or 12345-6789) or Canadian postal code (e.g., A1A 1A1)"
    ),
});

// Step 4: Name Schema
export const nameSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),
});

// Step 5: Contact Schema
export const contactSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      "Please enter a valid phone number (e.g., +1 123 456 7890 or 123-456-7890)"
    ),
});

// Combined schema for all steps
export const fullBuildingFormSchema = buildingTypeSchema
  .merge(dimensionsSchema)
  .merge(locationSchema)
  .merge(nameSchema)
  .merge(contactSchema);

// Type exports
export type BuildingTypeFormData = z.infer<typeof buildingTypeSchema>;
export type DimensionsFormData = z.infer<typeof dimensionsSchema>;
export type LocationFormData = z.infer<typeof locationSchema>;
export type NameFormData = z.infer<typeof nameSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type FullBuildingFormData = z.infer<typeof fullBuildingFormSchema>;

export const COUNTRY_CODES = [
  { value: "+1", label: "🇺🇸 +1", country: "US" },
  { value: "+44", label: "🇬🇧 +44", country: "UK" },
  { value: "+91", label: "🇮🇳 +91", country: "IN" },
  { value: "+61", label: "🇦🇺 +61", country: "AU" },
  { value: "+1 ", label: "🇨🇦 +1", country: "CA" },
];
