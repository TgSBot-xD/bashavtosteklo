'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const COORDINATES: [number, number] = [54.8229753078355, 56.101349259825504];
const YANDEX_MAPS_URL = `https://yandex.ru/maps/?pt=${COORDINATES[1]},${COORDINATES[0]}&z=16&l=map`;

export function ContactMap() {
  return (
    <div
      data-testid="contacts-map"
      className="bg-card ring-foreground/20 flex flex-col gap-4 rounded-lg p-4 shadow-2xl/20"
    >
      {/* Карта */}
      <div className="relative min-h-75 flex-1">
        <YMaps query={{ lang: 'ru_RU', apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
          <Map
            defaultState={{
              center: COORDINATES,
              zoom: 16,
              type: 'yandex#map',
            }}
            options={{
              suppressMapOpenBlock: true,
            }}
            className="h-full min-h-75 w-full overflow-hidden rounded-lg"
          >
            <Placemark
              geometry={COORDINATES}
              options={{
                preset: 'islands#nightCircleDotIcon',
                iconColor: '#22d3ee',
              }}
              properties={{
                hintContent: 'БашАвтоСтекло',
              }}
            />
          </Map>
        </YMaps>
      </div>

      {/* Кнопки */}
      <div className="flex flex-wrap gap-2">
        <a
          href={YANDEX_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 py-2 text-sm font-medium transition-colors"
        >
          Открыть в картах
        </a>
        <span className="bg-foreground/10 text-foreground/70 rounded-full px-4 py-2 text-sm">
          точка: Донского 50а
        </span>
      </div>
    </div>
  );
}
