import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import CharactersCard from "../component/CharactersCard.jsx";
// import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Characters = () => {

	const [characters, setCharacters] = useState([])

	const initURL = "https://rickandmortyapi.com/api/character"

	const GetApiInfo = (url) => {
		 fetch(url)
		 	.then(res =>  res.json())
			.then(data => setCharacters(data.results))
		 	.catch(err => console.error(err))
	};

	useEffect(() => {
		GetApiInfo(initURL);
	}, [])

	console.log(characters);
	return (
		
		<div>
			<CharactersCard characters={characters}/>
		</div>
	)

};

