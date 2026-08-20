import z from "zod";

export const contactFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
  });
  export const phoneSchema = z.object({
    phoneNumber: z
      .string()
      .regex(
        /^09\d{9}$/,
        "Please enter a valid Iranian phone number (e.g. 09123456789)"
      ),
  });
  
  export const otpSchema = z.object({
    otpCode: z
      .string()
      .length(4, "Verification code must be 4 digits."),
  });