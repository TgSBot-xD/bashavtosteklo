import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'shared/ui';
import { messengers } from '../config/messengers-dialog-data';
import Link from 'next/link';

export function MessengersDialog() {
  return (
    <Dialog>
      <DialogTrigger>Мессенджеры</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Мессенджеры</DialogTitle>
          <DialogDescription>{renderMessengerItems()}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function renderMessengerItems() {
  return messengers.map(({ id, name, href, color }) => {
    return (
      <Link
        key={id}
        href={href}
        rel="noopener noreferrer"
        className={`${color} text-foreground flex items-center justify-center rounded-lg px-4 py-3 text-center font-medium transition-colors`}
      >
        {name}
      </Link>
    );
  });
}
