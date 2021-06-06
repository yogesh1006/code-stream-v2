import { NavLink} from "react-router-dom";
import { toast } from "react-toastify";
import './header.css'



export default function Header() {

  
  const logoutHandler = () => {
    localStorage.getItem("jwt") && localStorage.clear();
    toast.error("Logout Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };



  return (
    <nav className="header">
    <NavLink  to="/">
      <div className="header-logo">
        Happy Tube
      </div>
    </NavLink>
     {localStorage.getItem("jwt") ? (<NavLink to="/" className="login" onClick={logoutHandler}>Logout</NavLink>) :
     
     (<NavLink to='/login' className="login">Login</NavLink>)

     }
    </nav>
  );
}
