import React from "react";
import { Link} from "react-router-dom";
import HomeImage from "../../assests/Images/atw8CM.webp";
import "./Navbar.css";

export default function Navbar({ userData,logout }) {
  return (
    <>
      <nav className="  navbar navbar-expand-lg    position-fixed start-0 end-0 navbar-dark border-2 ">
        <div className="container ">
          <Link className="navbar-brand text-light" to="">
            <img
              src={HomeImage}
              alt=""
              width="50"
              height="40"
              className="d-inline-block mx-3 rounded-circle align-text-top"
            />
            Game Over
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto " id="navbarNav">
            
            {userData?(
            
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to=" ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="all">
                  All
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <ul
                  className="dropdown-menu text-light bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`platform/pc`}>
                      pc
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`platform/browser`}>
                      browser
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  sort-by
                </Link>
                <ul
                  className="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`sortby/release-date`}>
                      release-data
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`sortby/popularity`}>
                      popularity
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`sortby/alphabetical`}>
                      alphabetical
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`sortby/relevance`}>
                      relevance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul
                  className="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/racing`}>
                      racing
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/sports`}>
                      sports
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/social`}>
                      social
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/shooter`}>
                      shooter
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/open-world`}>
                      open-world
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/zombie`}>
                      zombie
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/fantasy`}>
                      fantasy
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/action-rpg`}>
                      action-rpg
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/flight`}>
                      flight
                    </Link>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <Link className="nav-link" to={`categories/battle-royale`}>
                      battle-royale
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            ) :('')}
           
           
           
            <ul className="navbar-nav ms-auto mx-1">

                {userData ?  <li className="nav-item px-1">
                <Link
                  className="nav-link btn  text-white btn-dark  "
                  to="login" onClick={logout}
                >
                  Logout
                </Link>
              </li>:<>
              <li className="nav-item px-1">
                <Link
                  className="nav-link btn bg-dark text-white  "
                  to="login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link
                  className="nav-link btn bg-dark text-white  "
                  to="register"
                >
                  Register
                </Link>
              </li>
              </>
                }


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
