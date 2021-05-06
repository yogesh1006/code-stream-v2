import React from "react";
import { videos } from "../../data";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useState, useEffect } from "react";
import { useData } from "../../dataContext/DataContext";
import "./videoPageCard.css";
import VideoCard from "../videoCard/VideoCard";
import Modal from "react-modal";
import PlayListForm from "../Playlist/PlayListForm";

Modal.setAppElement('#root')

function VideoPageCard({ videoId }) {
  const { state, dispatch } = useData();

  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);

  const togglePlaylistModal = () => {
    setIsPlaylistModalOpen(!isPlaylistModalOpen);
  };

  const {
    title,
    channelImageUrl,
    description,
    channelName,
    likes,
  } = videos.find((video) => video.id === videoId);

  let videoLikeHandler = (videoId) => {
    let existInLikes = false;
    if (state.likedVideos.length > 0) {
      state.likedVideos.map((item) => {
        if (item.id === videoId) {
          existInLikes = true;
        }
        return item;
      });
    }
    if (!existInLikes) {
      dispatch({ type: "TOGGLE_LIKED_VIDEO", payload: videoId });
    }
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_HISTORY", payload: videoId });
    // eslint-disable-next-line
  }, [videoId]);

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


  





  return (
    <div>
      <div className="video-page-card card">
        <div className="video-page-section">
          <div className="container">
            <iframe
              width="450"
              height="350"
              className="responsive-iframe"
              src={"https://www.youtube.com/embed/" + videoId}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
          <div className="video-page-details">
            <div className="channel-image-container">
              <img
                className="channelImage"
                src={channelImageUrl}
                alt="channelimage"
              />
            </div>
            <div className="video-page-stats">
              <span className="channel-name">{channelName}</span>
              <p className="video-description">{description}</p>
            </div>
          </div>

          <div className="video-actions">
            <div
              className="video-action-item"
              onClick={() => videoLikeHandler(videoId)}
            >
              <ThumbUpOutlinedIcon /> <span>{likes}</span>
            </div>

            <div className="video-action-item" onClick={togglePlaylistModal}>
              <PlaylistAddOutlinedIcon /> <span>SAVE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="video-page-suggestion">
        <h3 className="video-suggestion-heading">Next Videos</h3>
        {videos.map((video) => {
          if (video.id === videoId) {
            return null;
          }
          return <VideoCard video={video} key={video.id} />;
        })}
      </div>
      <Modal
        style={customStyles}
        isOpen={isPlaylistModalOpen}
        onRequestClose={togglePlaylistModal}
      >
        <PlayListForm state={state}
          dispatch={dispatch}
          streamVideo={videoId}/>
      </Modal>
    </div>
  );
}

export default VideoPageCard;
