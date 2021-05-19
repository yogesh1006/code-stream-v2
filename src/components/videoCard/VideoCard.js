import React from "react";
import {Link} from "react-router-dom"
import './videocard.css'

function VideoCard({ video }) {
  return (
    <Link
      to={"/video/" + video.id}
      className="card"
      key={"suggestion" + video.id}
    >
      <img className="card-video-thumbnail" alt={video.title} src={video.thumbnailImgUrl} />
      <div className="card-details">
        <img className="card-channel-logo" src={video.channelImageUrl} alt={video.title}/>
         <div className="card-channel-details">
         <p className="card-title">{video.title}</p>
        <p className="card-channel-name">{video.channelName}</p>
         </div>
      </div>
    </Link>
  );
}

export default VideoCard;
