import { useParams ,Link} from "react-router-dom";
import { videos } from "../../data";
// import VideoList from "../VideoList/VideoList";
import { useData } from "../../dataContext/DataContext";
// import "./playlist-videos.css";

export default function PlayListVideos() {
  const { playlistId } = useParams();
  console.log(playlistId);
  const { state } = useData();

  let playlist = state.playlists.find((playlist) => playlist.id === playlistId);

  let videosToDisplay = [];
  console.log(videosToDisplay);
  videosToDisplay = getVideosToDisplay();

  function getVideosToDisplay() {
    videos.forEach((video) => {
      if (playlist.videos.includes(video.id)) {
        videosToDisplay.push(video);
      }
      if (videosToDisplay.length === playlist.videos.length) {
        return videosToDisplay;
      }
    });
    return videosToDisplay;
  }

  // const onRemoveHandler = (e, videoId) => {
  //   e.preventDefault();
  //   const userConsent = alert("Removing video from playlist, are you sure?");
  //   if (userConsent) {
  //     dispatch({
  //       type: "REMOVE_FROM_PLAYLIST",
  //       payload: {
  //         playlistId: playlistId,
  //         videoId: videoId,
  //       },
  //     });
  //   }
  // };

  return (
    <div className="playlist-videos">
      <h2 className="section-heading">{playlist.name}</h2>
      {/* <VideoList
        videos={videosToDisplay}
        onRemove={onRemoveHandler}
      ></VideoList> */}
      {videos.map((video) => (
        <Link
          to={`/video/${video.id}`}
          className="card"
          key={"suggestion" + video.id}
        >
          <div className="card-details">
            <div className="card-channel-details">
              <p className="card-title">{video.title}</p>
              <p className="card-channel-name">{video.channelName}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
