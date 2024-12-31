import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function DownloadButton({ onClick, disabled = false }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">Download</span>
    </button>
  );
}