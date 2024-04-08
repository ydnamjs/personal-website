import React from "react";
import "./App.css";
import {MainPanel} from "./main-panel/MainPanel";
import {AboutMe} from "./about-me/AboutMe";

function App() {
	return (
		<div className="container">
			<MainPanel>
				<AboutMe></AboutMe>
			</MainPanel>
			<div className="background"></div>
		</div>
	);
}

export default App;
