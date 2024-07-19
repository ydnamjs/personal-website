import React from "react";
import "./App.css";
import {Helmet} from "react-helmet";
import {AboutMe} from "./pages/about-me/AboutMe";

function App() {
	return (
		<div className="background">
			<Helmet>
				<title>Michael Snead</title>
			</Helmet>
			<AboutMe></AboutMe>
		</div>
	);
}

export default App;
