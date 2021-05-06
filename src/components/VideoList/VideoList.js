import React from "react";
import "./VideoList.css";
import VideoCard from "../videoCard/VideoCard";
import { videos } from "../../data";

function VideoList() {
  return (
    <>
      <h4 style={{padding:"0.5rem",letterSpacing:"3px"}}>Recommended Videos</h4>

      <div className="videolist">
        {videos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>
    </>
  );
}

export default VideoList;
