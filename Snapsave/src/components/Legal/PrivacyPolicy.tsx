import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
        <p className="mb-4">
          We collect minimal data necessary to provide our services. This includes URLs of content you wish to download and basic usage statistics.
        </p>

        <h2 className="text-xl font-semibold mb-4">Data Usage</h2>
        <p className="mb-4">
          Your data is used solely for providing the download service and improving user experience. We do not sell or share your data with third parties.
        </p>
      </div>
    </div>
  );
}