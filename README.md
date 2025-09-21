# YouTube Clone - YouTubeArc

A modern YouTube clone built with React, TypeScript, Redux Toolkit, and Tailwind CSS. This project replicates the core functionality and UI of YouTube with a clean, responsive design.

## 🚀 Features

### Core Functionality

- **Video Display**: Browse and view popular YouTube videos
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Real-time Data**: Fetches live data from YouTube API
- **State Management**: Redux Toolkit for efficient state handling
- **Modern UI**: Clean, YouTube-inspired interface

### Components & Layout

- **Header**: Navigation bar with YouTube branding
- **Sidebar**: Collapsible navigation menu with categories
- **Video Grid**: Responsive grid layout for video cards
- **Video Cards**: Individual video components with thumbnails and metadata
- **Button List**: Category filter buttons

### Navigation Sections

- **Main Navigation**: Home, Trending, Subscriptions
- **Library**: History, Liked Videos, Watch Later, Playlists
- **Subscriptions**: Channel subscriptions with avatars
- **Explore**: Music, Sports, Gaming, Movies categories

## 🛠️ Tech Stack

### Frontend

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Vite 7.1.6** - Fast build tool and dev server

### State Management

- **Redux Toolkit 2.9.0** - Modern Redux with less boilerplate
- **React Redux 9.2.0** - React bindings for Redux

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
src/
├── Componets/           # React components
│   ├── Header.tsx      # Top navigation bar
│   ├── Body.tsx        # Main layout container
│   ├── SideBar.tsx     # Collapsible sidebar navigation
│   ├── MainContainer.tsx # Main content area
│   ├── ButtonList.tsx  # Category filter buttons
│   ├── VideoContainer.tsx # Video grid container
│   ├── VideoCard.tsx   # Individual video card component
│   └── Button.tsx      # Reusable button component
├── Store/              # Redux store configuration
│   ├── store.ts        # Store setup and configuration
│   ├── appSlice/       # App-level state management
│   └── VideoSlice/     # Video data state management
├── hooks/              # Custom React hooks
│   └── useFetchVideo.ts # Video data fetching hook
├── utils/              # Utility functions and constants
│   └── constant.ts     # API endpoints and configuration
└── assets/             # Static assets and icons
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube Data API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd youtubeArc
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

4. **Get YouTube API Key**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Add the key to your `.env` file

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to `http://localhost:5173`

## 📱 Features Overview

### Video Display

- **Grid Layout**: Responsive video grid (1-4 columns based on screen size)
- **Video Cards**: Thumbnail, title, channel info, and metadata
- **Hover Effects**: Smooth transitions and visual feedback
- **Loading States**: Proper loading handling for API calls

### Navigation

- **Collapsible Sidebar**: Toggle sidebar visibility
- **Category Filters**: Filter videos by category
- **Responsive Menu**: Mobile-friendly navigation

### State Management

- **Video State**: Manages fetched video data
- **App State**: Handles sidebar visibility and UI state
- **Redux DevTools**: Debug state changes in development

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 API Integration

### YouTube Data API v3

- **Endpoint**: `https://youtube.googleapis.com/youtube/v3/videos`
- **Parameters**:
  - `part`: snippet, contentDetails, statistics
  - `chart`: mostPopular
  - `regionCode`: US
  - `maxResults`: 500 (configurable)
  - `key`: Your API key

### Data Structure

```typescript
interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}
```

## 🎨 Styling

### Tailwind CSS Classes

- **Grid System**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Responsive Design**: Mobile-first approach
- **Hover Effects**: `hover:shadow-lg transition-shadow`
- **Spacing**: Consistent padding and margins

### Design Principles

- **Clean Interface**: Minimal, YouTube-inspired design
- **Accessibility**: Proper alt texts and semantic HTML
- **Performance**: Optimized images and lazy loading
- **Responsive**: Works on all device sizes

## 🔒 Environment Variables

Required environment variables:

```env
VITE_YOUTUBE_API_KEY=your_api_key_here
```

## 📈 Performance Optimizations

- **useCallback**: Prevents unnecessary re-renders
- **useEffect**: Proper dependency management
- **Redux Toolkit**: Efficient state updates
- **Tailwind CSS**: Optimized CSS bundle
- **Vite**: Fast development and build times

## 🚧 Future Enhancements

- [ ] Video player integration
- [ ] Search functionality
- [ ] User authentication
- [ ] Playlist management
- [ ] Comments system
- [ ] Like/dislike functionality
- [ ] Channel pages
- [ ] Dark mode toggle
- [ ] Infinite scroll pagination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- YouTube for the API and design inspiration
- React and Redux communities
- Tailwind CSS team
- All open-source contributors

---

**Note**: This is a learning project and is not affiliated with YouTube or Google. Please respect YouTube's Terms of Service when using their API.
