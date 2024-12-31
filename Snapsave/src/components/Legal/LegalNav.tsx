import React from 'react';
import { Link } from 'react-router-dom';

export function LegalNav() {
  const links = [
    { to: '/terms', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/disclaimer', label: 'Disclaimer' },
    { to: '/dmca', label: 'DMCA' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 py-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}