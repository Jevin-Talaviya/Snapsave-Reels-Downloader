import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

export function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="text-purple-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
  );
}