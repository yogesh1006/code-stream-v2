import React, { useEffect } from "react";
import "./VideoList.css";
import axios from "axios";
import { API } from "../../backend";
import { useData } from "../../contexts/userDataContext";
import { Link } from "react-router-dom";

function VideoList() {
  const { state, dispatch } = useData();

  useEffect(() => {
    axios
      .get(`${API}/auth/get_all_videos`)
      .then((res) =>
        dispatch({ type: "SET_VIDEOLIST", payload: res.data.data })
      )
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h4 style={{ padding: "0.5rem", letterSpacing: "3px" }}>
        Recommended Videos
      </h4>

      <div className="videolist">
        {state.videolist.map((video) => (
          <Link
            to={"/video/" + video.id}
            className="card"
            key={"suggestion" + video.id}
          >
            <img
              className="card-video-thumbnail"
              alt={video.title}
              src={video.thumbnailImgUrl}
            />
            <div className="card-details">
              <img
                className="card-channel-logo"
                src={video.channelImageUrl}
                alt={video.title}
              />
              <div className="card-channel-details">
                <p className="card-title">{video.title}</p>
                <p className="card-channel-name">{video.channelName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default VideoList;
