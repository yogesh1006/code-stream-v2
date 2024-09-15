import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import './sideBar.css'

export default function Navigator() {
  return (
    <aside className="sidebar">
      <NavLink to="/" activeClassName="active-link" className="sidebar-item" exact>
        <HomeOutlinedIcon />
        <p className="nav-item-name">Home</p>
      </NavLink>
      <NavLink
        to="/playlist"
        activeClassName="active-link"
        className="sidebar-item"
      >
        <PlaylistAddOutlinedIcon />
        <p className="nav-item-name">Playlist</p>
      </NavLink>
      <NavLink to="/likes" activeClassName="active-link" className="sidebar-item">
        <ThumbUpOutlinedIcon />
        <p className="nav-item-name">likes</p>
      </NavLink>
      <NavLink to="/history" activeClassName="active-link" className="sidebar-item">
        <HistoryOutlinedIcon />
        <p className="nav-item-name">History</p>
      </NavLink>
    </aside>
  );
}
