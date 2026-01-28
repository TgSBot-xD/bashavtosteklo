import { Dot } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import { breadcrumbLinks } from '../../config/hero-data';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from 'shared/ui';

export function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="items-center">{renderBreadcrumbLinks()}</BreadcrumbList>
    </Breadcrumb>
  );
}

function renderBreadcrumbLinks() {
  return breadcrumbLinks.map(({ label, href, id }, index) => {
    const hasNextLink = index < breadcrumbLinks.length - 1;
    return (
      <Fragment key={href}>
        <BreadcrumbItem data-testid={id} className="text-sm">
          <BreadcrumbLink className="font-medium" asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {hasNextLink && (
          <BreadcrumbSeparator>
            <Dot />
          </BreadcrumbSeparator>
        )}
      </Fragment>
    );
  });
}
