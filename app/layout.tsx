import { type Metadata } from 'next';

import './globals.css';
import { ThemeProvider } from './_config/theme-provider';

const keywordsMetadata = [
  'Автостекло',
  'Башавтостекло',
  'Замена стёкл на авто',
  'Ремонт стёкл на авто',
  'Тонировка на авто',
];

export const metadata: Metadata = {
  generator: 'Next.js',
  title: {
    template: '%s - Башавтостекло',
    default: 'Башавтостекло',
  },
  description: 'Сайт компании Башавтостекло',
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
