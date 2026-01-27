import { highlightItems, highlightPerks } from '../../configs';

// TODO [BAS-12]: Сделать градиентную заливку для фона
export function HighlightsPanel() {
  return (
    <section
      data-testid="highlights-panel"
      className="ring-foreground/10 bg-card m-4 flex flex-col gap-4 rounded-lg p-4 ring md:m-0 md:w-full md:justify-start md:gap-8 lg:gap-4"
    >
      <h4 className="text-foreground/70 text-sm/8 font-normal tracking-wider">БЫСТРЫЕ ФАКТЫ</h4>
      <div data-testid="highlights-list" className="flex flex-col gap-6 pl-6 lg:gap-2">
        {renderHighlightItems()}
      </div>
      <div
        data-testid="highlights-perks"
        className="flex flex-row justify-between md:justify-start md:gap-6"
      >
        {renderHighlightPerks()}
      </div>
    </section>
  );
}

function renderHighlightItems() {
  return highlightItems.map(({ displayIndex, title, description }) => {
    return (
      <div
        data-testid={displayIndex}
        key={displayIndex}
        className="hover:lg:ring-foreground/15 dark:hover:lg:bg-foreground/5 flex flex-row gap-4 lg:p-4 hover:lg:rounded-sm hover:lg:ring"
      >
        <span className="text-foreground/80 ring-foreground/20 self-start rounded-sm p-2 px-3 text-base ring xl:text-lg">
          {displayIndex}
        </span>
        <div className="flex flex-col">
          <span className="text-foreground text-base font-semibold tracking-wide xl:text-lg">
            {title}
          </span>
          <span className="text-foreground/80 text-sm tracking-wide xl:text-base">
            {description}
          </span>
        </div>
      </div>
    );
  });
}

function renderHighlightPerks() {
  return highlightPerks.map(({ id, label }) => {
    return (
      <div
        data-testid={id}
        key={id}
        className="ring-foreground/20 text-foreground/70 rounded-md p-2 px-3 ring"
      >
        <span className="text-sm xl:text-base">{label}</span>
      </div>
    );
  });
}
