import { Link } from "react-router-dom";
import './header.css'



export default function Header() {
  return (
    <Link className="header" to="/">
      <div className="header-logo">
        <span style={{ color: "green" }}>Happy</span> Tube
      </div>
    </Link>
  );
}
