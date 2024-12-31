import React from 'react';
import { Clipboard } from 'lucide-react';

interface DownloadInputProps {
  url: string;
  onChange: (value: string) => void;
  onPaste: () => void;
  placeholder: string;
}

export function DownloadInput({ url, onChange, onPaste, placeholder }: DownloadInputProps) {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={url}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button
        onClick={onPaste}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Paste from clipboard"
      >
        <Clipboard className="w-5 h-5" />
      </button>
    </div>
  );
}