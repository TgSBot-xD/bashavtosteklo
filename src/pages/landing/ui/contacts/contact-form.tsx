'use client';

import { Controller, useForm } from 'react-hook-form';

import { serviceOptions } from 'pages/landing/config/contact-form-data';
import { ContactFormData } from 'pages/landing/models/types';

import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from 'shared/ui';

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);

  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 8) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      phone: '',
      service: serviceOptions[0],
      comment: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // eslint-disable-next-line no-console
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <Label htmlFor="fName">Имя</Label>
          <Input
            id="fName"
            type="text"
            autoComplete="name"
            placeholder="Например, Данил"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', {
              required: 'Введите имя',
              minLength: { value: 2, message: 'Минимум 2 символа' },
              maxLength: { value: 50, message: 'Максимум 50 символов' },
            })}
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>

        <div>
          <Label htmlFor="fPhone">Телефон</Label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Введите телефон',
              validate: (value) =>
                value.replace(/\D/g, '').length === 10 || 'Введите корректный номер телефона',
            }}
            render={({ field }) => (
              <div className="flex">
                <span className="border-input bg-muted text-muted-foreground inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm">
                  +7
                </span>
                <Input
                  id="fPhone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(999) 999-99-99"
                  className="rounded-l-none"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  value={field.value}
                  onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                />
              </div>
            )}
          />
          {errors.phone && <span role="alert">{errors.phone.message}</span>}
        </div>
      </div>

      <div>
        <Label htmlFor="fService">Услуга</Label>
        <Controller
          name="service"
          control={control}
          rules={{ required: 'Выберите услугу' }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="fService">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && <span role="alert">{errors.service.message}</span>}
      </div>

      <div>
        <Label htmlFor="fNote">Комментарий</Label>
        <Textarea
          id="fNote"
          rows={3}
          placeholder="Марка/модель, что нужно сделать, удобное время"
          aria-invalid={errors.comment ? 'true' : 'false'}
          {...register('comment', {
            maxLength: { value: 500, message: 'Максимум 500 символов' },
          })}
        />
        {errors.comment && <span role="alert">{errors.comment.message}</span>}
      </div>

      <div>
        <Button type="submit">Отправить</Button>
      </div>
    </form>
  );
}
