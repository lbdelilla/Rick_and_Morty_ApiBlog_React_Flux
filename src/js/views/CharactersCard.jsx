import React, { useState, useContext } from "react";
import "../../styles/demo.css";

import { Link } from "react-router-dom";
//import { Context } from "../store/appContext";

export const CharactersCard = ({
  id,
  image,
  name,
  status,
  gender,
}) => {
  //const { store, actions } = useContext(Context);

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
      <Link to="" className="property-social-icons">
        <i className="fa-regular fa-heart"></i>
      </Link>
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
