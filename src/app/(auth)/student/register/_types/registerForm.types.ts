import { z } from "zod";
import { registerFormSchema } from "../_validations/registerForm.schema";

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const registerDefaultValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  nic: "",
  dateOfBirth: "",
  gender: "",
  lane1: "",
  city: "",
  district: "",
  province: "",
  username: "",
  password: "",
};
