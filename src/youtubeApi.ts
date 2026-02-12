import axios from 'axios';

// Your YouTube API credentials
const YOUTUBE_API_KEY = 'AIzaSyD5sBPWtsNwB_27BSN875QIBH1Sv5JpBX8';
const CHANNEL_ID = 'UCWfDPy0clKLVNbOd1eNYNYQ';

interface YouTubeStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
  loading: boolean;
  error: boolean;
}

export const fetchYouTubeStats = async (): Promise<YouTubeStats> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels`,
      {
        params: {
          part: 'statistics',
          id: CHANNEL_ID,
          key: YOUTUBE_API_KEY
        }
      }
    );

    if (response.data.items && response.data.items.length > 0) {
      const stats = response.data.items[0].statistics;
      return {
        subscriberCount: formatNumber(stats.subscriberCount),
        videoCount: stats.videoCount,
        viewCount: formatViews(stats.viewCount),
        loading: false,
        error: false
      };
    }
    
    throw new Error('No channel data found');
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    return {
      subscriberCount: '15.9K',
      videoCount: '873',
      viewCount: '2.7M+',
      loading: false,
      error: true
    };
  }
};

// Format subscriber count (e.g., 15900 -> 15.9K)
function formatNumber(num: string): string {
  const number = parseInt(num);
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  }
  return num;
}

// Format view count
function formatViews(num: string): string {
  const number = parseInt(num);
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M+';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K+';
  }
  return num;
}