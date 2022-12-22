import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

// Custom Componet que muestra las Cards de los planetas
import { CharactersCard } from "./CharactersCard.jsx";
import { Navigation } from "../component/Navigation.jsx";


export const Characters = () => {
	const { store, actions } = useContext(Context);
	// Traemos los planets del store
	const characters = store.characters;
    // const selectPlanet = store.selectPlanet;
	console.log(characters);
	return (
		<div className="container">
            <h1 className="page-title text-light text-center">Characters</h1>
            <div>
                <Navigation/>
            </div>
			<div className="row justify-content-around">
				{   characters.map((e)=>{
                       return <CharactersCard key={e.id} image={e.image} name={e.name} status={e.status} species={e.species} gender={e.gender} id={e.id} type={e.type} origin={e.origin.name} oriURL={e.origin.url} location={e.location.name} locURL={e.location.url}/>
                        
                    })
                }
			</div>
		</div>
	);
};
