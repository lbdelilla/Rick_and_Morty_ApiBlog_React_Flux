import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/rickymorty.png";
import "../../styles/navbar.css";
import { FavoritesList } from "./favorites.jsx";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar ">
      <div className="d-flex container-fluid">
        <div className="p-2 flex-fill">
          <img className="logo" src={Logo} alt="Rick and Morty Logo" />
          <span className="logo-text">Rick and Morty</span>
        </div>
        <div className="navbarItems">
          <Link to="/">
            <span className="nav-item">Home</span>
          </Link>
          &nbsp;&nbsp;
          <Link to="/characters">
            <span className="nav-item">Characters</span>
          </Link>
          &nbsp;&nbsp;
          <div className="dropdown">
            <button
              type="button"
              className="nav-item dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="badge rounded-pill bg-dark">
                {store.favorites.length}
              </span>
              Favorites
            </button>
            <FavoritesList />
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item">test</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
