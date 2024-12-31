import { DownloadResponse } from './api';

export interface DownloadProgress {
  progress: number;
  status: 'pending' | 'downloading' | 'complete' | 'error';
  message?: string;
}

export class DownloadService {
  private static isValidYouTubeUrl(url: string): boolean {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  }

  private static isValidInstagramUrl(url: string): boolean {
    const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+$/;
    return instagramRegex.test(url);
  }

  static validateUrl(url: string): { isValid: boolean; platform?: 'youtube' | 'instagram' } {
    if (this.isValidYouTubeUrl(url)) {
      return { isValid: true, platform: 'youtube' };
    }
    if (this.isValidInstagramUrl(url)) {
      return { isValid: true, platform: 'instagram' };
    }
    return { isValid: false };
  }

  static async downloadVideo(videoInfo: DownloadResponse, quality: string): Promise<void> {
    const format = videoInfo.formats.find(f => f.quality === quality);
    if (!format) {
      throw new Error('Selected quality not available');
    }

    try {
      const link = document.createElement('a');
      link.href = format.url;
      link.download = `${videoInfo.title}.${format.ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      throw new Error('Download failed');
    }
  }
}