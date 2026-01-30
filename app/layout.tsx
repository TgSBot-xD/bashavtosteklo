import { type Metadata } from 'next';
import favIcon from '../public/favicon.ico';

import './globals.css';

import { ThemeProvider } from './_config/theme-provider';

const keywordsMetadata = [
  'Автостекло',
  'Башавтостекло',
  'Замена стёкл на авто',
  'Ремонт стёкл на авто',
  'Тонировка на авто',
  'Замена лобового стекла',
  'Ремонт сколов',
  'Тонировка Уфа',
  'Автостекло Уфа',
];

const siteDescription =
  'Башавтостекло — замена, ремонт сколов и трещин, тонировка стёкол и оптики, бронирование плёнкой. Быстро, аккуратно, с гарантией. Работаем в Уфе.';

export const metadata: Metadata = {
  generator: 'Next.js',
  title: {
    template: '%s - Башавтостекло',
    default: 'Башавтостекло — замена и ремонт автостёкол в Уфе',
  },
  description: siteDescription,
  keywords: keywordsMetadata,
  authors: [{ name: 'Vladislav' }],
  creator: 'Soldatenko Daniil',
  publisher: 'Denisov Vladislav',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://башавтостекло.рф'),
  /// TODO [BAS-4]: Проверить нужно ли менять на продакшн сборке
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://башавтостекло.рф',
    siteName: 'Башавтостекло',
    title: 'Башавтостекло — замена и ремонт автостёкол в Уфе',
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Башавтостекло — замена и ремонт автостёкол',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Башавтостекло — замена и ремонт автостёкол в Уфе',
    description: siteDescription,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <link rel="icon" href={favIcon.src} sizes="any" />
      <body className="dark:bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
