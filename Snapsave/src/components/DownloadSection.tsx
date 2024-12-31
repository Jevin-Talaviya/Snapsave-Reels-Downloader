import React, { useState } from 'react';
import { Download, Clipboard } from 'lucide-react';
import { readFromClipboard } from '../utils/clipboard';
import { downloadFromUrl } from '../utils/download';

interface DownloadSectionProps {
  title: string;
  placeholder: string;
}

export function DownloadSection({ title, placeholder }: DownloadSectionProps) {
  const [url, setUrl] = useState('');

  const handlePaste = async () => {
    try {
      const text = await readFromClipboard();
      setUrl(text);
    } catch (err) {
      // Error handling is done in the utility function
    }
  };

  const handleDownload = async () => {
    try {
      await downloadFromUrl(url);
    } catch (err) {
      // Error handling is done in the utility function
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={handlePaste}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Clipboard className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download
        </button>
      </div>
    </div>
  );
}