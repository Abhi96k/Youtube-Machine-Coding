import { MainContainer } from "./MainContainer";
import { SideBar } from "./SideBar";

export const Body = () => {
  return (
    <div className="flex grid-flow-col">
      <SideBar />
      <MainContainer />
    </div>
  );
};
