import React from "react";
import { Link } from "react-router-dom";
import Logo from "/workspace/_Blog_ReadingList/src/img/rickymorty.png"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<div className="d-flex container-fluid">
				<div className="p-2 flex-fill">
					<img className="logo" src={Logo} alt="Rick and Morty Logo"/>	
					<span className="logo-text">Rick and Morty</span>	
				</div>
					<div className="navbarItems">
						<Link to="/">
							<span className="nav-item">Home</span>
						</Link>
						&nbsp;&nbsp;
						<Link to="/characters">
							<span className="nav-item">Characters</span>
						</Link>
						&nbsp;&nbsp;
						<Link to="/locations">
							<span className="nav-item">Locations</span>
						</Link>
						
					</div>
			</div>
		</nav>
	);
};
