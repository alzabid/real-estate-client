import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar container">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span className="icon">
            <img src="/img/fav.png" alt="" />
          </span>
          <span>Real Estate</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/register"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <CgMenuMotion />
            </span>
          ) : (
            <span className="icon">
              <RiMenuAddLine />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
