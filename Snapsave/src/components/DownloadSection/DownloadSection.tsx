import React, { useState } from 'react';
import { DownloadInput } from './DownloadInput';
import { DownloadButton } from './DownloadButton';
import { VideoInfo } from './VideoInfo';
import { readFromClipboard } from '../../utils/clipboard';
import { fetchVideoInfo } from '../../services/api';
import { DownloadService } from '../../services/downloadService';
import type { DownloadResponse } from '../../services/api';

interface DownloadSectionProps {
  title: string;
  placeholder: string;
}

export function DownloadSection({ title, placeholder }: DownloadSectionProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<DownloadResponse | null>(null);

  const handlePaste = async () => {
    try {
      const text = await readFromClipboard();
      setUrl(text);
      await handleFetchInfo(text);
    } catch (err) {
      setError('Failed to read from clipboard');
    }
  };

  const handleFetchInfo = async (videoUrl: string) => {
    const validation = DownloadService.validateUrl(videoUrl);
    if (!validation.isValid) {
      setError('Invalid URL. Please enter a valid YouTube or Instagram URL');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const info = await fetchVideoInfo(videoUrl);
      setVideoInfo(info);
    } catch (err) {
      setError('Failed to fetch video information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (quality: string) => {
    if (!videoInfo) return;
    
    setIsLoading(true);
    try {
      await DownloadService.downloadVideo(videoInfo, quality);
    } catch (err) {
      setError('Download failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <DownloadInput
          url={url}
          onChange={setUrl}
          onPaste={handlePaste}
          placeholder={placeholder}
        />
        <DownloadButton
          onClick={() => handleFetchInfo(url)}
          disabled={isLoading || !url.trim()}
        />
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {videoInfo && (
        <VideoInfo
          info={videoInfo}
          onDownload={handleDownload}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}