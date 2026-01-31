import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from 'shared/lib';
import { ButtonLinkItems } from 'shared/models/button-link.types';

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:text-background dark:bg-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none hover:saturate-150 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 dark:text-background dark:bg-ring text-accent dark:bg-primary/80 dark:text-background w-max rounded-full',
        destructive:
          'bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white',
        outline:
          'bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-background ring-foreground/10 dark:ring-foreground/20 dark:bg-secondary/40 dark:text-foreground/90 font-bold ring md:py-4 md:text-base',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-background dark:text-background dark:bg-ring rounded-full',
        link: 'text-accent-foreground/80 hover:text-accent-foreground hover:bg-accent/0 hover:dark:text-foreground dark:text-foreground/80 hover:ring-0 dark:bg-inherit',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function ButtonLink({
  className,
  children,
  href,
  variant = 'default',
  ...props
}: React.ComponentProps<'button'> & ButtonLinkItems) {
  const isAnchor = href.startsWith('#');

  return (
    <Button
      variant={variant}
      className={cn(`${variant === 'default' ? 'text-background' : 'text-foreground'} `, className)}
      {...props}
      asChild
    >
      {isAnchor ? (
        <a href={href} className="cursor-pointer">
          {children}
        </a>
      ) : (
        <Link href={href} className="cursor-pointer">
          {children}
        </Link>
      )}
    </Button>
  );
}

export { Button, buttonVariants, ButtonLink };
