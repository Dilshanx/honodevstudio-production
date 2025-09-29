// import { z } from 'zod';

// export const contactFormSchema = z.object({
//   name: z
//     .string()
//     .min(2, 'Name must be at least 2 characters')
//     .max(50, 'Name must be less than 50 characters')
//     .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

//   email: z
//     .string()
//     .email('Please enter a valid email address')
//     .min(5, 'Email must be at least 5 characters')
//     .max(100, 'Email must be less than 100 characters'),

//   subject: z
//     .string()
//     .min(5, 'Subject must be at least 5 characters')
//     .max(100, 'Subject must be less than 100 characters'),

//   message: z
//     .string()
//     .min(10, 'Message must be at least 10 characters')
//     .max(1000, 'Message must be less than 1000 characters'),

//   company: z
//     .string()
//     .max(100, 'Company name must be less than 100 characters')
//     .optional(),

//   phone: z
//     .string()
//     .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
//     .optional()
//     .or(z.literal('')),
// });

// export type ContactFormData = z.infer<typeof contactFormSchema>;

// // Server-side validation schema (more strict)
// export const serverContactSchema = contactFormSchema.extend({
//   // Add server-side specific validations
//   honeypot: z.string().max(0, 'Bot detected'), // Honeypot field for spam protection
// });

// export type ServerContactData = z.infer<typeof serverContactSchema>;

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
    .refine((val) => {
      if (!val || val.trim() === "") return true; // Optional field

      // Remove all non-digit characters for validation
      const digitsOnly = val.replace(/\D/g, "");

      // Check if it's a valid length (6-15 digits)
      if (digitsOnly.length < 6 || digitsOnly.length > 15) {
        return false;
      }

      // Multiple phone number patterns
      const phonePatterns = [
        /^[\+]?[1-9][\d]{0,15}$/, // Original pattern
        /^0[1-9]\d{8}$/, // Sri Lankan mobile (0712123456)
        /^0[1-9]\d{7,8}$/, // Sri Lankan landline
        /^\+94[1-9]\d{8}$/, // Sri Lankan international (+94712123456)
        /^\d{10}$/, // 10-digit format
        /^[\+]?[(]?[\d\s\-\(\)]{6,20}$/, // International with formatting
      ];

      return phonePatterns.some(
        (pattern) => pattern.test(val) || pattern.test(digitsOnly)
      );
    }, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Server-side validation schema (more strict)
export const serverContactSchema = contactFormSchema
  .extend({
    // Add server-side specific validations
    honeypot: z.string().max(0, "Bot detected"), // Honeypot field for spam protection
  })
  .transform((data) => ({
    ...data,
    // Clean up empty strings to undefined for optional fields
    company: data.company === "" ? undefined : data.company,
    phone: data.phone === "" ? undefined : data.phone,
  }));

export type ServerContactData = z.infer<typeof serverContactSchema>;

// Helper function to validate phone numbers
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone || phone.trim() === "") return true; // Optional

  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.length < 6 || digitsOnly.length > 15) {
    return false;
  }

  const phonePatterns = [
    /^\+?[1-9]\d{1,14}$/, // International format
    /^0[1-9]\d{8}$/, // Sri Lankan mobile (0712123456)
    /^0[1-9]\d{7,8}$/, // Sri Lankan landline
    /^\d{10}$/, // 10-digit US format
    /^\+94[1-9]\d{8}$/, // Sri Lankan international format
  ];

  return phonePatterns.some(
    (pattern) => pattern.test(phone) || pattern.test(digitsOnly)
  );
}
