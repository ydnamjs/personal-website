import React from "react";
import "./App.css";
import {MainPanel} from "./main-panel/MainPanel";
import {AboutMe} from "./about-me/AboutMe";
import {Helmet} from "react-helmet";

function App() {
	return (
		<div className="container">
			<Helmet>
				<title>Michael Snead</title>
			</Helmet>
			<MainPanel>
				<AboutMe></AboutMe>
			</MainPanel>
			<div className="background"></div>
		</div>
	);
}

export default App;
