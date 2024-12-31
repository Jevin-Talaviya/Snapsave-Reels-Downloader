import React from 'react';

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
      <div className="prose dark:prose-invert">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using SnapSave, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
        </p>
        
        <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
        <p className="mb-4">
          SnapSave provides a service for downloading content from YouTube and Instagram for personal use only, in compliance with respective platform policies.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
        <p className="mb-4">
          Users are responsible for ensuring they have the right to download content and must comply with copyright laws and platform terms of service.
        </p>
      </div>
    </div>
  );
}