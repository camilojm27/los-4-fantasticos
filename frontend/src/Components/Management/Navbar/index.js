import './Navbar.css'
import { useSelector } from "react-redux";
//lo hare con css por que es algo que siempre esta presente, entonces siempre se cargara su clase
const Navbar = ({ sidebarOpen, openSidebar }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
    return (
      <nav className="navbar">
    
        <div className="navbar__left">
          <a className="active_link" href="./">
          {currentUser === null ? "user" : currentUser.user.name }
          </a>
        </div>
        <div className="navbar__right">
          <a href="/">
            <img width="30" src="https://res.cloudinary.com/kentruri/image/upload/v1619027635/avatar_h4orl7.svg" alt="avatar" />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  