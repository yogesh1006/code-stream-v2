import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPage from "./components/VideoPage/VideoPage";
import LikeVideo from "./components/LikedVideos/LikedVideo";
import History from "./components/History/History";
import PlaylistPage from "./components/playlist/PlaylistPage/PlayListPage";
import PlayListVideos from "./components/playlistVideos/PlayListVideos";
import Signin from "./components/signin/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/signup/Signup";
import {PrivateRoute} from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <SideBar />
      <div className="main-container">
        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/register" component={Signup} />

          <Route exact path="/" component={VideoList}></Route>
          <Route path="/video/:id">
            <VideoPage />
          </Route>

          <PrivateRoute path="/likes" component={LikeVideo} />
          <PrivateRoute path="/history" component={History} />
          <PrivateRoute path="/playlist" component={PlaylistPage} />
          <PrivateRoute path="/playlist/:playlistId">
            <PlayListVideos />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
