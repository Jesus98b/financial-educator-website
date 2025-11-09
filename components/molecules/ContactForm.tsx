'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validation';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { isHoneypotValid, sanitizeInput } from '@/lib/validation';

/**
 * Contact form component with validation and security features
 */
export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    // Honeypot validation
    if (!isHoneypotValid(data.website)) {
      // Silently fail for bots
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        phone: data.phone ? sanitizeInput(data.phone) : '',
        message: sanitizeInput(data.message),
      };

      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <Input
        label="Nombre"
        {...register('name')}
        error={errors.name?.message}
        required
        autoComplete="name"
      />

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        required
        autoComplete="email"
      />

      <Input
        label="Teléfono (Opcional)"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
        autoComplete="tel"
      />

      <Textarea
        label="Mensaje"
        rows={6}
        {...register('message')}
        error={errors.message?.message}
        required
      />

      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <Input
          label="Website"
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitStatus === 'success' && (
        <div
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          role="alert"
        >
          ¡Gracias por tu mensaje! Te responderé pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
          role="alert"
        >
          Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctame
          directamente por WhatsApp.
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
};

