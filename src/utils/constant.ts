export const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

export const youtubeVideoApi =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=500&key=${apiKey}`;

