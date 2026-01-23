import Link from 'next/link';

import { ButtonLinkItems } from '../model/button-link.types';

import { cn } from 'shared/lib';
import { Button } from 'shared/ui';

function ButtonLink({ className, children, href, variant = 'default' }: ButtonLinkItems) {
  return (
    <Button
      variant={variant}
      className={cn(
        `${variant === 'default' ? 'text-background' : 'text-foreground'} dark:text-background dark:bg-ring rounded-full hover:saturate-150 ${className}`,
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export { ButtonLink };
