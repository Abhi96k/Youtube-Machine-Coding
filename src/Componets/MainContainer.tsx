import { ButtonList } from "./ButtonList";
import { VideoContainer } from "./VideoContainer";

export const MainContainer = () => {
  return (
    <div className="p-4 col-span-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
