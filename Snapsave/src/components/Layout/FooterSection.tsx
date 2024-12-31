import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}