import { withSentryConfig } from '@sentry/nextjs';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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
