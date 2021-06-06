import React from "react";
import { videos } from "../../data";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useState, useEffect } from "react";
import { useData } from "../../dataContext/DataContext";
import "./videoPageCard.css";
import Modal from "react-modal";
import PlayListForm from "../Playlist/PlayListForm";
import VideoList from "../VideoList/VideoList";
import axios from "axios";
import { useParams } from "react-router";
import { API } from "../../backend";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

function VideoPageCard({ videoId }) {
  const { state, dispatch } = useData();

  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);

  const { id } = useParams();

  const togglePlaylistModal = () => {
    setIsPlaylistModalOpen(!isPlaylistModalOpen);
  };

  const { title, channelImageUrl, description, channelName, likes } =
    videos.find((video) => video.id === videoId);

  let videoLikeHandler = (id) => {
    axios
      .post(
        `${API}/api/add_to_liked_videos`,
        { videoId: id },
        {
          headers: {
            authorization: localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_HISTORY", payload: videoId });
    // eslint-disable-next-line
  }, [videoId]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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
              src={"https://www.youtube.com/embed/" + id}
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
              onClick={() => videoLikeHandler(id)}
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
        {state.videolist.map((video) => {
          if (video.id === id) {
            return null;
          }
          return <VideoList video={video} key={video.id} />;
        })}
      </div>
      <Modal
        style={customStyles}
        isOpen={isPlaylistModalOpen}
        onRequestClose={togglePlaylistModal}
      >
        <PlayListForm state={state} dispatch={dispatch} streamVideo={videoId} />
      </Modal>
    </div>
  );
}

export default VideoPageCard;
