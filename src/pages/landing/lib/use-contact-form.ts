import emailjs from '@emailjs/browser';
import { useMetrica } from 'next-yandex-metrica';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import type { ContactFormData } from 'pages/landing/models/types';

export type SubmitStatus = 'idle' | 'success' | 'error';

interface UseContactFormOptions {
  defaultService: string;
}

export function useContactForm({ defaultService }: UseContactFormOptions) {
  const { reachGoal } = useMetrica();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      phone: '',
      service: defaultService,
      comment: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        {
          title: data.service,
          name: data.name,
          message: `Телефон: +7 ${data.phone}\nУслуга: ${data.service}\nКомментарий: ${data.comment || 'Не указан'}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
      );

      setSubmitStatus('success');
      reachGoal('form_submit_success', { service: data.service });
      form.reset();
    } catch {
      setSubmitStatus('error');
      reachGoal('form_submit_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    submitStatus,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
