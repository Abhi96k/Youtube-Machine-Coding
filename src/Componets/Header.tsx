import youtubeLogo from "../assets/youtube-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsSideBarOpen } from "../Store/appSlice/appSlice";
import type { RootState } from "../Store/store";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(
    (state: RootState) => state.app.isSideBarOpen
  );
  const toogleSideBar = () => {
    dispatch(setIsSideBarOpen(!isSideBarOpen));
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const getSearchSuggestions = async () => {
    const response = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);
  return (
    <div className="flex justify-between items-center p-4 shadow-lg bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <img
          onClick={toogleSideBar}
          className="w-6 h-6 cursor-pointer hover:bg-gray-100 rounded-full p-1"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <img src={youtubeLogo} alt="YouTube" className="h-5 cursor-pointer" />
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-8">
        <div className="flex w-full">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <img
          className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-300"
          alt="avatar"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};
