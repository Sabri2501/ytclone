import React from 'react';
import './ytvideos.css'; // Import the CSS for styling

const YTvideos = () => {
  return (
    <div className="yt-video-container">
      <h2 className="yt-title">Featured YouTube Video</h2>
      <div className="yt-video-frame">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/hkHHwA-vEyQ?si=cvxI3b1pqweHJazj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YTvideos;
