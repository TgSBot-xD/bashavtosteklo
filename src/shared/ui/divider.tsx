import { cn } from 'shared/lib';

function Divider({ className }: { className?: string }) {
  return (
    <div
      data-testid="divider"
      className={cn(
        `via-foreground/20 h-px w-full bg-linear-to-r from-transparent to-transparent ${className}`,
      )}
    />
  );
}

export { Divider };
