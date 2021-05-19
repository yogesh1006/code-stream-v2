import { useData } from "../../dataContext/DataContext";
import LikedVideoCard from "./LikedVideoCard"
import {videos} from "../../data"


import "./likedVideo.css";

export default function LikedVideo() {
  const { state } = useData();

  let videosToDisplay = [];
  videosToDisplay = getVideosToDisplay();
  function getVideosToDisplay() {
         videos.forEach((video) => {
      if (state.likedVideos.includes(video.id)) {
        videosToDisplay.push(video);
      }
      if (videosToDisplay.length === state.likedVideos.length) {
        return videosToDisplay;
      }
    });
    return videosToDisplay;
  }

  return (
    <div className="liked-video-container">
      <h2 style={{padding:"0.5rem",letterSpacing:"3px",fontSize:"1rem"}}>Liked Videos</h2>

      {videosToDisplay && <LikedVideoCard videos={videosToDisplay} />}
    </div>
  );
}
