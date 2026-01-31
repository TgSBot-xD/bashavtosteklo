import { Skeleton } from 'shared/ui';

export function SkeletonMapContacts() {
  return (
    <div className="bg-card ring-foreground/20 flex h-full flex-col gap-4 rounded-lg p-4 shadow-2xl/20">
      {/* Карта placeholder */}
      <Skeleton className="min-h-[300px] flex-1 rounded-lg" />

      {/* Кнопки placeholder */}
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-9 w-36 rounded-full" />
        <Skeleton className="h-9 w-40 rounded-full" />
      </div>
    </div>
  );
}
