import { Divider } from 'shared/ui';

export function Footer() {
  return (
    <footer
      data-testid="footer"
      className="mb-8 flex w-full flex-col gap-2 px-4 lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <Divider />
      <p className="text-foreground/70 text-xs lg:text-sm">© Башавтостекло</p>
    </footer>
  );
}
