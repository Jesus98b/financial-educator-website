import { describe, it, expect } from 'vitest';
import { contactFormSchema, isHoneypotValid, sanitizeInput } from './validation';

describe('contactFormSchema', () => {
  it('validates correct form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short name', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('isHoneypotValid', () => {
  it('returns true for empty honeypot', () => {
    expect(isHoneypotValid(undefined)).toBe(true);
    expect(isHoneypotValid('')).toBe(true);
  });

  it('returns false for filled honeypot', () => {
    expect(isHoneypotValid('http://spam.com')).toBe(false);
  });
});

describe('sanitizeInput', () => {
  it('removes HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script');
  });

  it('trims whitespace', () => {
    expect(sanitizeInput('  test  ')).toBe('test');
  });

  it('limits length', () => {
    const longString = 'a'.repeat(2000);
    expect(sanitizeInput(longString).length).toBeLessThanOrEqual(1000);
  });
});

