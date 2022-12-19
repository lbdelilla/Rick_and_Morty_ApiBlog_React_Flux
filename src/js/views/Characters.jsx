import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


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
		<div className="container bg-dark">
            <h1 className="text-light text-center pt-4">Characters</h1>
            <div>
                <Navigation/>
            </div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{   characters.map((e)=>{
                       return <CharactersCard key={e.id} image={e.image} name={e.name} status={e.status} species={e.species} gender={e.gender}/>
                        
                    })
                }
			</div>
		</div>
	);
};
