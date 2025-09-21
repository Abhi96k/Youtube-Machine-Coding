import homeIcon from "../assets/home-icon.svg";
import trendingIcon from "../assets/trending-icon.svg";
import subscriptionsIcon from "../assets/subscriptions-icon.svg";
import historyIcon from "../assets/history-icon.svg";
import likedIcon from "../assets/liked-icon.svg";
import watchLaterIcon from "../assets/watch-later-icon.svg";
import playlistsIcon from "../assets/playlists-icon.svg";
import musicIcon from "../assets/music-icon.svg";
import sportsIcon from "../assets/sports-icon.svg";
import gamingIcon from "../assets/gaming-icon.svg";
import moviesIcon from "../assets/movies-icon.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../Store/store";
export const SideBar = () => {
  const isSideBarOpen = useSelector(
    (state: RootState) => state.app.isSideBarOpen
  );
  return (
    <div
      className={`w-64 bg-white shadow-lg h-screen overflow-y-auto sticky top-0 ${
        isSideBarOpen ? "block" : "hidden"
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={homeIcon} alt="Home" className="w-5 h-5 mr-3" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={trendingIcon} alt="Trending" className="w-5 h-5 mr-3" />
            Trending
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={subscriptionsIcon}
              alt="Subscriptions"
              className="w-5 h-5 mr-3"
            />
            Subscriptions
          </a>
        </nav>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Library
        </h2>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={historyIcon} alt="History" className="w-5 h-5 mr-3" />
            History
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={likedIcon} alt="Liked Videos" className="w-5 h-5 mr-3" />
            Liked Videos
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={watchLaterIcon}
              alt="Watch Later"
              className="w-5 h-5 mr-3"
            />
            Watch Later
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={playlistsIcon} alt="Playlists" className="w-5 h-5 mr-3" />
            Playlists
          </a>
        </nav>
      </div>

      {/* Subscriptions Section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Subscriptions
        </h2>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 mr-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            MrBeast
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 mr-3 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            TechWorld
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 mr-3 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            Gaming Central
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 mr-3 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            Cooking Master
          </a>
        </nav>
      </div>

      {/* Explore Section */}
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Explore
        </h2>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={musicIcon} alt="Music" className="w-5 h-5 mr-3" />
            Music
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={sportsIcon} alt="Sports" className="w-5 h-5 mr-3" />
            Sports
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={gamingIcon} alt="Gaming" className="w-5 h-5 mr-3" />
            Gaming
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={moviesIcon} alt="Movies" className="w-5 h-5 mr-3" />
            Movies
          </a>
        </nav>
      </div>
    </div>
  );
};
