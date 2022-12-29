import React, { useState, useContext } from "react";
import "../../styles/demo.css";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersCard = ({
  id,
  image,
  name,
  status,
  gender,
}) => {
  const { store, actions } = useContext(Context);

  const handleFavorites = (id, name) => {
    const obj = [{ id, name}];
    store.favorites.some((characters) => characters.name === obj[0].name)
      ? null
      : actions.setFavorites(obj);
  };
  
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt="Rick and Morty character" />
      </div>
      <div className="property-description">
        <h5> {name}</h5>
        <p>
          Status : {status} <br /> Gender : {gender}
        </p>
      </div>
      <button className="property-social-icons btn-dark"  onClick={() => handleFavorites(id, name)}>
        <i className="fa-regular fa-heart"></i>
      </button>
      <Link to={`/characters/${id}`} className="detail-icons">
        <button
          className="btn btn-dark"
        >
          Details
        </button>
      </Link>
    </div>
  );
};
