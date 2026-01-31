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
      <DialogTrigger>Мессенджеры</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Мессенджеры</DialogTitle>
          <DialogDescription>
            {messengers.map(({ id, name, href, color }) => (
              <Link
                key={id}
                href={href}
                rel="noopener noreferrer"
                className={`${color} text-foreground flex items-center justify-center rounded-lg px-4 py-3 text-center font-medium transition-colors`}
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
