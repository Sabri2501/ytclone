import React from 'react';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li
          key={video.id.videoId}
          onClick={() => onVideoClick(video.id.videoId)} // Call the function to update the selected video
          className="video-card"
        >
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            className="video-thumbnail"
          />
          <div className="video-details">
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
