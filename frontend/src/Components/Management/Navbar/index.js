import './Navbar.css'
//lo hare con css por que es algo que siempre esta presente, entonces siempre se cargara su clase
const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
      <nav className="navbar">
    
        <div className="navbar__left">
          <a className="active_link" href="./">
            Username
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
  