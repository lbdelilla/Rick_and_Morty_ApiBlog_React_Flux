import React, {useState, useContext} from "react"
import "../../styles/demo.css";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


 export const CharactersCard = ({id, image, name, species, status, gender, origin}) => {
   
    return (
        <div className="row">
			<div id={id} className="col">
				<div className="center">
                    <div className="property-card">
                        <a href="#">
                            <div className="property-image">
                                <img src={image} alt="Image of a Rick and Morty Character"/>
                            </div>
                        </a>
                        <div className="property-description">
                            <h5>  {name}  </h5>
                            <p>Species : {species} <br/> Status : {status} <br/> Gender : {gender} <br/> Origin : {origin.name}</p>
                        </div>
                        <a href="#">
                            <Link className="property-social-icons">                             
                                <i className="fa-regular fa-heart"></i>
                            </Link>
                        </a>
                        {/* <div className="d-flex justify-content-between">
                            <Link to={`/characters/${id}`} className="btn btn-secondary"
                                onClick={() => actions.getCharacter({ id: id, name: name, species: species, status: status, gender: gender, origin: origin })}>
                                    Details
                            </Link>
                        </div> */}
                    </div>
                </div>
			</div>
        </div>
    )
}


