import "./likedVideo.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../backend";
import { toast } from "react-toastify";

export default function LikedVideo() {
  const [likedVideos, setLikedVideos] = useState([]);

  const getAllLikedvideos = () => {
    axios
      .get(`${API}/api/get_all_liked_videos`, {
        headers: {
          authorization: localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log(res);
        setLikedVideos(res.data.likedVideos.likedVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllLikedvideos();
  }, []);



  const removeLikedVideo = (id) => {
    console.log(id);
    axios.post(`${API}/api/remove_liked_video`,{
      videoId: id
    },{
      headers: {
        authorization: localStorage.getItem("jwt"),
      },
    })
    .then((res) =>{
      getAllLikedvideos();
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
     
  }

  return (
    <div className="liked-video-container">
      <h2 style={{ padding: "0.5rem", letterSpacing: "3px", fontSize: "1rem" }}>
        Liked Videos
      </h2>
      {likedVideos.map((video) => (
        <div key={video._id}>
          <Link
            to={"/video/" + video.id}
            className="card video-card"
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
          <button onClick={()=> removeLikedVideo(video.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
