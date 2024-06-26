import { ReactNode } from 'react';

interface ProductCardRootProps {
  children: ReactNode;
}

export function ProductCardRoot({ children }: ProductCardRootProps) {
  return (
    <div
      className="card card-compact w-full bg-base-100 dark:bg-base-200 dark:shadow-none shadow overflow-hidden"
      itemScope
      itemType="https://schema.org/Offer"
    >
      {children}
    </div>
  );
}
