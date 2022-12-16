import React from "react"
import "../../styles/demo.css";


 const CharactersCard = ({characters = []}) => {
    return (
        <div className="row">
            { characters.map((char, index) => {
				return (
				 <div key={index} className="col">
					<div className="center">
                        <div className="property-card">
                            <a href="#">
                                <div className="property-image">
                                </div>
                            </a>
                                <div className="property-description">
                                    <h5> {char.name}  </h5>
                                    <p>Species:{char.species} <br/> Status: {char.status} <br/> Gender: {char.gender} <br/> Origin: {char.origin.name}</p>
                                    <p></p>
                                </div>
                            <a href="#">
                                <div className="property-social-icons">
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