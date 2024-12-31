import React from 'react';
import { Download } from 'lucide-react';
import type { DownloadResponse } from '../../services/api';

interface VideoInfoProps {
  info: DownloadResponse;
  onDownload: (quality: string) => void;
  isLoading: boolean;
}

export function VideoInfo({ info, onDownload, isLoading }: VideoInfoProps) {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={info.thumbnail}
          alt={info.title}
          className="w-full sm:w-48 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {info.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {info.formats.map((format) => (
              <button
                key={format.quality}
                onClick={() => onDownload(format.quality)}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{format.quality}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}