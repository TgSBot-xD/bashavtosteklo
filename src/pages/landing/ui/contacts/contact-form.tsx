'use client';

import { Controller } from 'react-hook-form';

import { serviceOptions } from 'pages/landing/config/contact-data';
import { formatPhoneNumber } from 'shared/lib';
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
import { useContactForm } from 'pages/landing/lib/use-contact-form';

export function ContactForm() {
  const { form, isSubmitting, submitStatus, onSubmit } = useContactForm({
    defaultService: serviceOptions[0],
  });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form id="form" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <div className="mt-2 flex flex-col">
          <Label
            htmlFor="formName"
            className="text-foreground/60 dark:text-foreground/80 mb-2 flex text-sm"
          >
            Имя
          </Label>
          <Input
            id="formName"
            type="text"
            autoComplete="name"
            placeholder="Например, Данил"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', {
              required: 'Введите имя',
              minLength: { value: 3, message: 'Минимум 3 символа' },
              maxLength: { value: 50, message: 'Максимум 50 символов' },
            })}
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>

        <div className="mt-2 flex flex-col">
          <Label
            htmlFor="formPhone"
            className="text-foreground/60 dark:text-foreground/80 mb-2 text-sm"
          >
            Телефон
          </Label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Введите телефон',
              validate: (value) =>
                value.replaceAll(/\D/g, '').length === 10 || 'Введите корректный номер телефона',
            }}
            render={({ field }) => (
              <div className="flex">
                <span className="border-input bg-muted text-muted-foreground inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm">
                  +7
                </span>
                <Input
                  id="formPhone"
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

      <div className="mt-2 flex flex-col">
        <Label
          htmlFor="formService"
          className="text-foreground/60 dark:text-foreground/80 mb-2 text-sm"
        >
          Услуга
        </Label>
        <Controller
          name="service"
          control={control}
          rules={{ required: 'Выберите услугу' }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="formService " className="dark:bg-inherit">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent className="bg-background dark:bg-background">
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

      <div className="mt-4 flex flex-col">
        <Label htmlFor="formNote" className="text-foreground/60 mb-2 text-sm">
          Комментарий
        </Label>
        <Textarea
          id="formNote"
          rows={3}
          placeholder="Марка/модель, что нужно сделать, удобное время"
          aria-invalid={errors.comment ? 'true' : 'false'}
          {...register('comment', {
            maxLength: { value: 500, message: 'Максимум 500 символов' },
          })}
        />
        {errors.comment && <span role="alert">{errors.comment.message}</span>}
      </div>

      <div className="mt-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <p className="mt-3 text-sm text-green-600">Заявка успешно отправлена!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-3 text-sm text-red-600">Ошибка отправки. Попробуйте позже.</p>
      )}
    </form>
  );
}
