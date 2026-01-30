import { Divider } from 'shared/ui';

export function Footer() {
  return (
    <div
      data-testid="footer"
      className="mb-8 flex w-full flex-col gap-2 px-4 lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <Divider />
      <h6 className="text-foreground/70 text-xs lg:text-sm">© Башавтостекло</h6>
    </div>
  );
}
