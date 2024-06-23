import React, {useEffect, useState} from "react";
import "./App.css";
import {MainPanel} from "./main-panel/MainPanel";
import {AboutMe} from "./about-me/AboutMe";
import {Helmet} from "react-helmet";

let scriptAttached = false;

function App() {
	const [motionEnabled, setMotionEnabled] = useState(true);

	useEffect(() => {
		if (!scriptAttached) {
			scriptAttached = true;
			const script = document.createElement("script");
			script.src = process.env.PUBLIC_URL + "/background.js";
			script.async = true;
			document.body.appendChild(script);
			return () => {
				script.remove();
				console.log("removed");
			};
		}
	}, [motionEnabled]);

	return (
		<div className="container">
			<Helmet>
				<title>Michael Snead</title>
			</Helmet>
			<MainPanel>
				<AboutMe></AboutMe>
			</MainPanel>
			{motionEnabled && <canvas id="background" />}
			{!motionEnabled && <div id="background" />}
			{motionEnabled && (
				<button
					id="toggle-motion-button"
					onClick={() => {
						setMotionEnabled(!motionEnabled);
					}}
				>
					Disable Motion
				</button>
			)}
		</div>
	);
}

export default App;
