import { z } from "zod";

export const PropertySchema = z.object({
  listingId: z.number(),
});

export const pathPropertySchema = z.object({
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});

export const agentListingSchema = z.object({
  price: z.string().min(1, "Price is required").max(255).optional(),
  bed: z.string().min(0).max(255).optional(),
  bath: z.string().min(0).max(255).optional(),
  imgSrc: z.array(z.string()).max(5).optional(),
  propertySize: z.string().min(1).max(255).optional(),
  assignedToUserPhone: z.string().min(1).max(255).optional(),
  assignedToUserEmail: z.string().min(1).max(255).optional(),
  assignedToUserName: z.string().min(1).max(255).optional(),
  propertyLocationId: z.number().optional(),
  listedBy: z.string().min(1).max(255).optional(),
  description: z
    .string()
    .min(0, "description is required")
    .max(10000)
    .optional()
    .nullable(),
});

export const userSchema = z.object({
  firstName: z.string().min(1, "FirstName is required").max(10).optional(),
  lastName: z.string().min(1, "FirstName is required").max(10).optional(),
  email: z.string(),
  password: z.string(),
});

export const listingStatus = z.object({
  desc: z.string().min(1).max(255),
});

export const propertyLocation = z.object({
  cityId: z.string().min(1).max(255).optional(),
  regionId: z.string().min(1).max(255).optional().nullable(),
  address: z.string().min(1).max(255).optional(),
  countryId: z.string().min(1).max(255).optional().nullable(),
  propertyTypeId: z
    .string()
    .min(1, "propertyTypeId is required")
    .max(255)
    .optional()
    .nullable(),
  listingTypeId: z
    .string()
    .min(1, "listingTypeId is required")
    .max(255)
    .optional()
    .nullable(),
});

export const clientInterestSchema = z.object({
  name: z.string().min(1, "Name is required").max(255).optional(),
  email: z.string().min(1, "Email is required").max(255).optional(),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .max(255)
    .optional(),
  message: z.string().min(1, "Message is required").max(255).nullable(),
  listingId: z.number().optional(),
});

export const countrySchema = z.object({
  name: z.string().min(1, "Name is required").max(255).optional(),
  capital: z.string().min(1, "Capital is required").max(255).optional(),
});

export const stateSchema = z.object({
  name: z.string().min(1, "Name is required").max(255).optional(),
  countryId: z.string().min(1, "CountryId is required").max(255).optional(),
});

export const citySchema = z.object({
  name: z.string().min(1, "Name is required").max(255).optional(),
  countryId: z.string().min(1, "CountryId is required").max(255).optional(),
  stateId: z.string().min(1, "CountryId is required").max(255).optional(),
});
