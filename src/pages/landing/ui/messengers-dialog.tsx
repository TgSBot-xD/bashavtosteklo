'use client';

import Link from 'next/link';
import { useMetrica } from 'next-yandex-metrica';

import { messengers } from '../config/messengers-dialog-data';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'shared/ui';

export function MessengersDialog() {
  const { reachGoal } = useMetrica();

  const handleOpenChange = (open: boolean) => {
    if (open) {
      reachGoal('messengers_dialog_open');
    }
  };

  const handleMessengerClick = (messenger: string) => {
    reachGoal('messenger_click', { messenger });
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger className="ring-foreground/20 text-foreground hover:text-foreground hover:ring-foreground/60 dark:bg-secondary/40 dark:text-foreground/90 cursor-pointer rounded-full p-2 px-3 font-sans tracking-tight ring transition-all">
        Мессенджеры
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-6">
          <DialogTitle>Мессенджеры</DialogTitle>
          <DialogDescription className="flex w-full flex-col gap-4 self-center md:flex-row">
            {messengers.map(({ id, name, href, color }) => (
              <Link
                key={id}
                href={href}
                rel="noopener noreferrer"
                className={`${color} text-foreground flex w-full items-center justify-center rounded-lg px-4 py-3 text-center font-medium transition-colors md:w-1/3`}
                onClick={() => handleMessengerClick(id)}
              >
                {name}
              </Link>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
