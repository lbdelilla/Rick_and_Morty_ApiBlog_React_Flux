import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export function CharactersDetails() {
  const { store, actions } = useContext(Context);
  //const characterInfo = store.characterInfo;
  const [characterInfo, setCharacterInfo] = useState({})

  //const type = characterInfo.type == "" ? "Unknown" : characterInfo.type;

    const {theid} =useParams();

    useEffect(() => {
    		 fetch(`https://rickandmortyapi.com/api/character/`+ theid)
			.then ((response => response.json()))
			.then((data => setCharacterInfo({characterInfo: data})))
           
    }, []);
console.log(characterInfo);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            // src={characterInfo.image}
            className="img-fluid rounded-start"
            alt="Ricky and Morty Character"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{characterInfo.name}</h5>
            <p className="card-text">
              {/* Status: {characterInfo.status} */}
              <br />
              {/* Gender: {characterInfo.gender} */}
              <br />
              {/* Species: {characterInfo.species} */}
              <br />
              {/* Type: {type} */}
              <br />
              {/* Origin: {characterInfo.origin.name} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
