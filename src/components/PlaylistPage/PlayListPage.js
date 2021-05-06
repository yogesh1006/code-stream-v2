import { Link } from "react-router-dom";
import { videos } from "../../data";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import "./playlistPage.css";
import { useData } from "../../dataContext/DataContext";

export default function PlayListPage() {
  const {state}=useData();
  return (
    <div>
      <h2 style={{fontSize:"1rem",padding:"1rem",letterSpacing:"3px"}}>Playlist</h2>

      <div className="playlist-container">
        {state.playlist.map((list) => {
          const videoThumbNailObj = videos.find(
            (video) => video.id === list.videos[0]
          );

          const firstVideoThumbNail =
          videoThumbNailObj && videoThumbNailObj.thumbnailImgUrl;

          return (
            <Link
              className="card"
              to={`/playlist/${list.id}`}
              key={list.id}
            >
              <div className="playlist-img-container">
                {list.videos.length > 0 ? (
                  <img
                    className="card-video-thumbnail"
                    src={firstVideoThumbNail}
                    alt="thumbnailImg"
                  />
                ) : (
                  <div className="empty-videos">
                    <span>Add Videos</span>
                  </div>
                )}
                <div className="playlist-overlay">
                  <PlaylistAddIcon />
                  <p>{list.videos.length} videos</p>
                </div>
              </div>
              <p className="card-title">{list.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
