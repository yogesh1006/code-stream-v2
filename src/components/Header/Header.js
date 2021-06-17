import { NavLink} from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/authContext";
import './header.css'



export default function Header() {

   const {isUserLoggedIn, setLogin} = useAuth()

  const logoutHandler = () => {
    localStorage.clear();
    setLogin(false);
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
     { isUserLoggedIn ? (<NavLink to="/" className="login" onClick={() =>logoutHandler()}>Logout</NavLink>) :
     
     (<NavLink to='/login' className="login">Login</NavLink>)

     }
    </nav>
  );
}
