export function reducerFunction(state, action) {


  const createPlaylist = (state, { playlistName }) => {
    const stateCopy = { ...state };

    stateCopy.playlist = state.playlist.concat({
      id: state.playlist.length + 1 || 1,
      name: playlistName,
      videos: [],
    });

    return stateCopy;
  };

  const addToPlaylist = (state, { playlistId, videoId }) => {
    const stateCopy = { ...state };
    stateCopy.playlist = state.playlist.map((playlist) => {
      const playlistCopy = { ...playlist };
      if (playlist.id === playlistId) {
        playlistCopy.videos = [...playlist.videos, videoId];
      }
      return playlistCopy;
    });
    return stateCopy;
  };

  const removeFromPlaylist = (state, { playlistId, videoId }) => {
    const stateCopy = { ...state };
    stateCopy.playlist = state.playlist.map((playlist) => {
      const playlistCopy = { ...playlist };
      if (playlist.id === playlistId) {
        playlistCopy.videos = playlist.videos.filter(
          (embedId) => embedId !== videoId
        );
      }
      return playlistCopy;
    });
    return stateCopy;
  };

  const updateHistory = (state, videoId) => {
    const stateCopy = { ...state };
    const newHistory = state.history.filter((id) => id !== videoId);
    newHistory.push(videoId);
    stateCopy.history = newHistory;
    return stateCopy;
  };

  switch (action.type) {
    case "TOGGLE_LIKED_VIDEO":
      return {
        likedVideos: [...state.likedVideos, action.payload],
        history: state.history,
        playlist: state.playlist,
      };

    case "UPDATE_HISTORY":
      return updateHistory(state, action.payload);

    case "CREATE_PLAYLIST":
      return createPlaylist(state, action.payload);

    case "ADD_TO_PLAYLIST":
      return addToPlaylist(state, action.payload);

    case "REMOVE_FROM_PLAYLIST":
      return removeFromPlaylist(state, action.payload);

    default:
      return state;
  }
}
