import React from "react";
import { formatDuration } from "../helper/FormationCount";
import { formatViewCount } from "../helper/FormationViewCount";
import { formatTimeAgo } from "../helper/FormationDuration";

interface VideoCardProps {
  video: {
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      publishedAt: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
    contentDetails: {
      duration: string;
    };
    statistics: {
      viewCount: string;
    };
  };
}






export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  console.log(video);
  return (
    <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {formatDuration(video.contentDetails.duration)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">
          {video.snippet.title}
        </h3>
        <div className="flex items-center space-x-2 text-xs text-gray-600">
          <span>{video.snippet.channelTitle}</span>
          <span>•</span>
          <span>{formatViewCount(video.statistics.viewCount)}</span>
          <span>•</span>
          <span>{formatTimeAgo(video.snippet.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};
