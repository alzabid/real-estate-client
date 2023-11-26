import "../Components/Navbar.css";
import { NavLink } from "react-router-dom";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
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

          {user && (
            <>
              
              <li className="nav-item">
                <NavLink
                  exact
                  to="/properties"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/dashboard/users"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

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

          <li>
            {user && user?.email ? (
              <>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label
                    tabIndex={0}
                    className={`avatar ${user ? "online" : "offline"} md:ml-3`}
                  >
                    <div className=" w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <p>{user.displayName}</p>
                    </li>
                    <li>
                      <p>{user.email}</p>
                    </li>
                    <li>
                      <a onClick={logOut}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
