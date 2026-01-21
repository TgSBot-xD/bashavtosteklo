import { Dot } from 'lucide-react';
import Link from 'next/link';

import { breadcrumbsItems } from '../config';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from 'shared/ui';

function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="items-center">
        <BreadcrumbSeparator>
          <Dot className="text-primary" />
        </BreadcrumbSeparator>
        {renderBreadcrumbItems()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function renderBreadcrumbItems() {
  return breadcrumbsItems.map(({ label, href }) => {
    return (
      <div className="flex items-center text-lg" key={href}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Dot />
        </BreadcrumbSeparator>
      </div>
    );
  });
}

export { Breadcrumbs };
