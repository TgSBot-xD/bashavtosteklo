import { listHighlights, listHighlightsBonus } from '../config/highlightsList';

// TODO [BAS-12]: Сделать градиентную заливку для фона
export function HighlightsBlock() {
  return (
    <section className="max-w-full rounded-lg border p-4 md:w-full md:p-6">
      <div className="flex flex-col gap-8 lg:gap-4">
        <h4 className="text-lg md:text-2xl">Быстрые факты</h4>
        <div data-testid="highlits-list" className="flex w-full flex-col gap-4 md:w-max md:gap-6">
          {ComposeHighlitsList()}
        </div>
        <div
          data-testid="highlits-bonus"
          className="flex flex-row justify-between md:justify-start md:gap-4"
        >
          {ComposeHighlitsBonus()}
        </div>
      </div>
    </section>
  );
}

export function ComposeHighlitsList() {
  return listHighlights.map(({ index, title, description }) => {
    return (
      <div
        key={index}
        className="flex flex-row items-center gap-4 rounded-lg border border-white/30 p-2 md:border-none md:p-3 hover:md:ring hover:md:ring-white/50"
      >
        <span className="flex rounded-lg border border-white/30 p-2 md:px-3 md:text-2xl">
          {index}
        </span>
        <div className="flex flex-col">
          <span className="text-lg text-white md:text-xl">{title}</span>
          <span className="text-sm whitespace-pre-line md:text-lg">{description}</span>
        </div>
      </div>
    );
  });
}

export function ComposeHighlitsBonus() {
  return listHighlightsBonus.map(({ index, label }) => {
    return (
      <div
        key={index}
        className="h-max w-max rounded-full border border-white/20 bg-gray-600/60 p-2 px-4 text-gray-400/80 md:text-lg"
      >
        <div className="flex">{label}</div>
      </div>
    );
  });
}
