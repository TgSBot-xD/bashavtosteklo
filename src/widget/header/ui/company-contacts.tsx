import Link from 'next/link';

import { Button } from 'shared/ui';

function CompanyNumber() {
  return (
    <Button
      variant={'ghost'}
      className="text-foreground/70 hover:ring-border saturate-150 hover:bg-inherit hover:ring-1 dark:hover:bg-inherit"
    >
      +7 (347) 266-17-84
    </Button>
  );
}

function ButtonLinkToForm() {
  return (
    <Link href="#form">
      <Button
        variant={'default'}
        className="text-background dark:text-background dark:bg-ring rounded-full py-6 hover:saturate-150"
      >
        Онлайн-запись
      </Button>
    </Link>
  );
}

export { CompanyNumber, ButtonLinkToForm };
