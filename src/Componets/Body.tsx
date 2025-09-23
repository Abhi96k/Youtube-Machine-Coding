import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <div className="flex grid-flow-col">
      <SideBar />
      <Outlet />
    </div>
  );
};
