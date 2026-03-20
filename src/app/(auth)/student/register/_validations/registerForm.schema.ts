import { z } from "zod";

export const registerFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  nic: z.string().trim().min(1, "NIC is required"),
  dateOfBirth: z.string().trim().min(1, "Date of birth is required"),
  gender: z.string().trim().min(1, "Gender is required"),
  lane1: z.string().trim().min(1, "Lane 1 is required"),
  city: z.string().trim().min(1, "City is required"),
  district: z.string().trim().min(1, "District is required"),
  province: z.string().trim().min(1, "Province is required"),
  username: z.string().trim().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
