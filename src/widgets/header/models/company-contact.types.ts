import React from 'react';

import { ButtonLinkItems } from 'shared/models';

export interface CompanyContactItems extends ButtonLinkItems {
  id: number;
  href: string;
  className?: string;
  children: React.ReactNode;
}
