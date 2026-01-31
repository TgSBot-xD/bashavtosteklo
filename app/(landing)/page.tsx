import { MainPage } from 'src/pages/landing/ui/main';
import { YandexMetricaProvider } from 'next-yandex-metrica';

export default function Home() {
  return (
    <YandexMetricaProvider
      tagID={106549409}
      router="app"
      initParameters={{
        webvisor: true,
        clickmap: true,
        ecommerce: '"dataLayer',
        accurateTrackBounce: true,
        trackLinks: true,
      }}
    >
      <MainPage />
    </YandexMetricaProvider>
  );
}
