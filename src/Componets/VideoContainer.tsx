import { useSelector } from "react-redux";
import useFetchVideo from "../hooks/useFetchVideo";
import { VideoCard } from "./VideoCard";
import type { RootState } from "../Store/store";

export const VideoContainer = () => {
  useFetchVideo();

  const videos = useSelector((state: RootState) => state.video.videos);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {videos?.items?.map((video: any) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};
