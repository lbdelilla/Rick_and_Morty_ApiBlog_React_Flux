import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import CharactersCard from "../component/Characters.jsx";
// import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const People = () => {

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



{/* <div className="center">
				<div className="property-card">
				  <img src='${char.image}'>
					<div className="property-image">
					  <div className="property-image-title">
						 <h5>Card Title</h5> 
					  </div>
					</div></img>
				  <div className="property-description">
					<h5> Card Title </h5>
					<p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
				  </div>
				  <a href="#">
<div className="property-social-icons">*/}
					  {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
					{/*</div>
				  </a>
				</div>
				</div> */}