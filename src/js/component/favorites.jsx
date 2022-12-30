import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const FavoritesList = () => {
  const { store, actions } = useContext(Context);

  const favorites = store.favorites;

  const handleDelete = (name, id) => {
    actions.deleteFavorites(name, id);
  };

  return (
    <ul className="dropdown-menu dropdown-menu-ligth dropdown-menu-end">
      {!favorites.length && (
        <li className="dropdown-item">Add your favorites</li>
      )}
      {favorites.map((favorites, i) => (
        <li
          key={i}
          className=" dropdown-item d-flex justify-content-between align-items-center"
        >
          <Link
            to={`/characters/${favorites.id}`}
            relative="route"
            className="text-decoration-none text-warning"
          >
            <span>{favorites.name}</span>
          </Link>

          <i
            className="fa-solid fa-trash"
            onClick={() => handleDelete(favorites.name, favorites.id)}
          ></i>
        </li>
      ))}
    </ul>
  );
};
