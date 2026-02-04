'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    Sentry.captureException(error, {
      tags: { boundary: 'landing-page' },
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Произошла ошибка</h1>
      <p className="text-muted-foreground text-center">
        Что-то пошло не так. Попробуйте обновить страницу.
      </p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2"
      >
        Попробовать снова
      </button>
    </div>
  );
}
