import React, { useState, useEffect, useRef } from 'react';
import { fetchVideos } from './YoutubeAPI';
import VideoList from './VideoList';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('React tutorials');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoPlayerRef = useRef(null); // Reference to the video player

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos(query);
      setVideos(fetchedVideos);
    };
    loadVideos();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();
    if (searchQuery) {
      setQuery(searchQuery);
      setSelectedVideo(null); // Reset selected video when a new search is made
    }
  };

  const handleVideoClick = (videoId) => {
    if (selectedVideo !== videoId) {
      setSelectedVideo(videoId); // Show the new selected video

      // Scroll to the video player
      if (videoPlayerRef.current) {
        videoPlayerRef.current.scrollIntoView({
          behavior: 'smooth', // Smooth scroll to the video
          block: 'start', // Scroll the video to the top of the viewport
        });
      }
    }
  };

  return (
    <div>
      <h1>YouTube Video Explorer</h1>
      <div className="container">
        {/* Search Form */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="search-input"
            placeholder="Search for videos..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* Video Embedding */}
        {selectedVideo && (
          <div className="video-player" ref={videoPlayerRef}>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Video List */}
        <VideoList videos={videos} onVideoClick={handleVideoClick} />
      </div>

      <footer>
        Made with ❤️ using React | © 2024 Sabri Khadija
      </footer>
    </div>
  );
};

export default App;
