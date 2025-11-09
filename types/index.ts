/**
 * Core type definitions for the Financial Educator website
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // Honeypot field
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

