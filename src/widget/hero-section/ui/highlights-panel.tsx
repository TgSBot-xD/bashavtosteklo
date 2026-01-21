import { highlightItems, highlightPerks } from '../config';

// TODO [BAS-12]: Сделать градиентную заливку для фона
export function HighlightsPanel() {
  return (
    <section
      data-testid="highlights-panel"
      className="max-w-full rounded-lg border p-4 md:w-full md:p-6"
    >
      <div className="flex flex-col gap-8 lg:gap-4">
        <h4 className="text-lg md:text-2xl">Быстрые факты</h4>
        <div data-testid="highlights-list" className="flex w-full flex-col gap-4 md:w-max md:gap-6">
          {renderHighlightItems()}
        </div>
        <div
          data-testid="highlights-perks"
          className="flex flex-row justify-between md:justify-start md:gap-4"
        >
          {renderHighlightPerks()}
        </div>
      </div>
    </section>
  );
}

export function renderHighlightItems() {
  return highlightItems.map(({ displayIndex, title, description }) => {
    return (
      <div
        key={displayIndex}
        className="flex flex-row items-center gap-4 rounded-lg border border-white/30 p-2 md:border-none md:p-3 hover:md:ring hover:md:ring-white/50"
      >
        <span className="flex rounded-lg border border-white/30 p-2 md:px-3 md:text-2xl">
          {displayIndex}
        </span>
        <div className="flex flex-col">
          <span className="text-lg text-white md:text-xl">{title}</span>
          <span className="text-sm whitespace-pre-line md:text-lg">{description}</span>
        </div>
      </div>
    );
  });
}

export function renderHighlightPerks() {
  return highlightPerks.map(({ id, label }) => {
    return (
      <div
        key={id}
        className="h-max w-max rounded-full border border-white/20 bg-gray-600/60 p-2 px-4 text-gray-400/80 md:text-lg"
      >
        <div className="flex">{label}</div>
      </div>
    );
  });
}
