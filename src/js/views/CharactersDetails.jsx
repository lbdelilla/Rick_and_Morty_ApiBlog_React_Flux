import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export function CharactersDetails() {
  const { store, actions } = useContext(Context);
  //const characterInfo = store.characterInfo;
  const [characterInfo, setCharacterInfo] = useState({});

  //const type = characterInfo.type == "" ? "Unknown" : characterInfo.type;

  const { theid } = useParams();

  const getCharacterInfo = (id, setCharacterInfo) => {
    fetch(`https://rickandmortyapi.com/api/character/` + id)
      .then((response) => response.json())
      .then((data) => setCharacterInfo(data));
  };

  useEffect(() => {
    getCharacterInfo(theid, setCharacterInfo);
  }, []);

  console.log(characterInfo);

  return (
    
    <div className="card mb-3">
      <div className="row g-0 ">
        <div className="col-md-4">
          <img
            src={characterInfo.image}
            className="img-fluid rounded-start"
            alt="Ricky and Morty Character"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="detail-card-title card-title">{characterInfo.name}</h5>
            <p className="detail-card-text card-text">Status: {characterInfo.status}</p>
            <p className="detail-card-text card-text">Gender: {characterInfo.gender}</p>
            <p className="detail-card-text card-text">Species: {characterInfo.species}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
