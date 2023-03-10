import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./views/home";
import { Characters } from "./views/Characters.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharactersDetails } from "./views/CharactersDetails.jsx";


//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:theid" element={<CharactersDetails/>} />
						<Route path="*" element={<h1 style={"color: white"}>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
