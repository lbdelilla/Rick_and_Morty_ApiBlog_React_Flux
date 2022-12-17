import React from "react"
import "../../styles/demo.css";
import { Navigation } from "./Navigation.jsx";

 const CharactersCard = ({characters = []}) => {
    return (
        <div className="row">
            <div>
                <Navigation/>
            </div>
            { characters.map((char, index) => {
				return (
				 <div key={index} className="col">
					<div className="center">
                        <div className="property-card">
                            <a href="#">
                                <div className="property-image">
                                    <img src={char.image} alt="Image of a Rick and Morty Character"/>
                                </div>
                            </a>
                                <div className="property-description">
                                    <h5> {char.name}  </h5>
                                    <p>Species : {char.species} <br/> Status : {char.status} <br/> Gender : {char.gender} <br/> Origin : {char.origin.name}</p>
                                    <p></p>
                                </div>
                            <a href="#">
                                <div className="property-social-icons">
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                            </a>
                        </div>
                    </div>
				 </div>
				 )
			
			})}
        </div>
    )
}


export default CharactersCard;