import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),

  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),

  phone: z
    .string()
    .regex(/^[\+]?[0-9][\d]{0,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Server-side validation schema (more strict)
export const serverContactSchema = contactFormSchema.extend({
  // Add server-side specific validations
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field for spam protection
});

export type ServerContactData = z.infer<typeof serverContactSchema>;
