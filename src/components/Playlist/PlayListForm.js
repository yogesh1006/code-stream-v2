import React,{useRef} from "react";
import './playlistform.css'
// import { useData } from "../../dataContext/DataContext";

function PlayListForm({state,dispatch,streamVideo}) {
    // const {state,dispatch}=useData();

    const handlePlaylistToggle = (playlistId, isVideoInPlaylist) => {
        dispatch({
          type: isVideoInPlaylist
            ? "REMOVE_FROM_PLAYLIST"
            : "ADD_TO_PLAYLIST",
          payload: {
            videoId: streamVideo,
            playlistId: playlistId,
          },
        });
      };
    
      const playListNameRef = useRef();
    
      const createPlaylistHandler = () => {
        const playlistName = playListNameRef.current.value;
        if (playlistName) {
          dispatch({
            type:"CREATE_PLAYLIST",
            payload: {
              playlistName: playlistName,
            },
          });
          playListNameRef.current.value = "";
        }
      };

  return (
    <div className="playlist-form">
      <h3 className="section-heading">Your Playlists</h3>
      <ul className="playlist-list">
        {state.playlist.map((list) => {
          const isVideoPartOfPlaylist = list.videos.includes(streamVideo);
          return (
            <li key={list.id} style={{listStyle:"none"}}>
              <label>
                <input
                  type="checkbox"
                  checked={isVideoPartOfPlaylist}
                  onChange={() =>
                    handlePlaylistToggle(list.id, isVideoPartOfPlaylist)
                  }
                ></input>
                {list.name}
              </label>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          ref={playListNameRef}
          maxLength="30"
          type="text"
          placeholder="Create Playlist"
          className="input-playlist"
        />
        <span className="btn-playlist"  onClick={createPlaylistHandler}>
          CREATE
        </span>
      </div>
    </div>
  );
}

export default PlayListForm;
