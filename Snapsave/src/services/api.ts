import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API endpoint

export interface DownloadResponse {
  url: string;
  title: string;
  thumbnail: string;
  formats: {
    quality: string;
    url: string;
    ext: string;
  }[];
}

export async function fetchVideoInfo(url: string): Promise<DownloadResponse> {
  try {
    const response = await axios.get(`${API_BASE_URL}/info`, {
      params: { url }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch video information');
  }
}