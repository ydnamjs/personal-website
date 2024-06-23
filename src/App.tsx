import React, {useEffect} from "react";
import "./App.css";
import {MainPanel} from "./main-panel/MainPanel";
import {AboutMe} from "./about-me/AboutMe";
import {Helmet} from "react-helmet";

let scriptAttached = false;

function App() {
	useEffect(() => {
		if (!scriptAttached) {
			scriptAttached = true;
			const script = document.createElement("script");
			script.src = process.env.PUBLIC_URL + "/background.js";
			script.async = true;
			document.body.appendChild(script);
			return () => {
				script.remove();
			};
		}
	}, []);

	return (
		<div className="container">
			<Helmet>
				<title>Michael Snead</title>
			</Helmet>
			<MainPanel>
				<AboutMe></AboutMe>
			</MainPanel>
			<canvas id="background" />
		</div>
	);
}

export default App;
