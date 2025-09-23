export const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

export const youtubeVideoApi =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=500&key=${apiKey}`;


export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=${apiKey}&q=`;

// Alternative: Use YouTube's search suggestions via search endpoint
export const YOUTUBE_SEARCH_SUGGESTIONS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=${apiKey}&q=`;
