/**
 * Validation schemas and utilities
 */

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]*$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  website: z.string().optional(), // Honeypot field
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Sanitizes user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 1000); // Limit length
}

/**
 * Validates honeypot field (should be empty for legitimate submissions)
 */
export function isHoneypotValid(website?: string): boolean {
  return !website || website === '';
}

