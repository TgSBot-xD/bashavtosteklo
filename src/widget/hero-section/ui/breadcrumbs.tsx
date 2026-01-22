import { Dot } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import { breadcrumbLinks } from '../config';

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
      <BreadcrumbList className="items-center">{renderBreadcrumbLinks()}</BreadcrumbList>
    </Breadcrumb>
  );
}

function renderBreadcrumbLinks() {
  return breadcrumbLinks.map(({ label, href }, index) => {
    const hasNextLink = index < breadcrumbLinks.length - 1;
    return (
      <Fragment key={href}>
        <BreadcrumbItem className="text-lg">
          <BreadcrumbLink asChild>
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

export { Breadcrumbs };
