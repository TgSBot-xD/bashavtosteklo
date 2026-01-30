'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'shared/ui';

const PHONE_NUMBER = '79272365108';

const messengers = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: `https://wa.me/${PHONE_NUMBER}`,
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    href: `https://t.me/+${PHONE_NUMBER}`,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 'max',
    name: 'MAX',
    href: `https://max.ru/call/${PHONE_NUMBER}`,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
] as const;

interface MessengersDialogProps {
  readonly trigger: React.ReactNode;
  readonly onOpenChange?: (open: boolean) => void;
}

export function MessengersDialog({ trigger, onOpenChange }: MessengersDialogProps) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="size-5" />
            Выберите мессенджер
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          {messengers.map(({ id, name, href, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} flex items-center justify-center rounded-lg px-4 py-3 text-center font-medium text-white transition-colors`}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface MessengersButtonProps {
  readonly variant?: 'default' | 'secondary' | 'link';
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly onDialogOpenChange?: (open: boolean) => void;
}

export function MessengersButton({
  variant = 'secondary',
  className,
  children,
  onDialogOpenChange,
}: MessengersButtonProps) {
  return (
    <MessengersDialog
      onOpenChange={onDialogOpenChange}
      trigger={
        <Button variant={variant} className={className}>
          {children}
        </Button>
      }
    />
  );
}
