import { youtubeVideoApi } from "../utils/constant";
import { setVideos } from "../Store/VideoSlice/VideoSlice";
import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";

export const useFetchVideo = () => {
  const dispatch = useDispatch();
  const getVideos = useCallback(async (): Promise<void> => {
    const response = await fetch(youtubeVideoApi);
    const data = await response.json();
    dispatch(setVideos(data));
  }, [dispatch]);
  useEffect(() => {
    getVideos();
  }, [getVideos]);
  
  return { getVideos };
};

export default useFetchVideo;

