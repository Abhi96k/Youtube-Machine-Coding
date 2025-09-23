import { useEffect } from "react";
import { closeSideBar } from "../Store/appSlice/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div>
      WatchPage {videoId}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=1L6MeM-AXC-YYr0D`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
