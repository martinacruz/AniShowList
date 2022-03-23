import { React } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../styles/NavBar.css";

const NavBar = () => {
  // const [querey, setQuerey] = useState('')

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/" className="logo">
            <span>ANISHOWLIST</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
      </div>
      <div className="seach-container">
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
