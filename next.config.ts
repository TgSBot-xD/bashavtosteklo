import { withSentryConfig } from '@sentry/nextjs';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
        ],
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // Отключить загрузку source maps в GlitchTip (не поддерживается)
  sourcemaps: {
    disable: true,
  },

  // Отключить телеметрию Sentry
  telemetry: false,

  // Скрыть логи сборки
  silent: false,
});
