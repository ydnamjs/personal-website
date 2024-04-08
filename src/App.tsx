import React from "react";
import "./App.css";
import {MainPanel} from "./main-panel/MainPanel";

function App() {
	return (
		<div className="container">
			<MainPanel></MainPanel>
			<div className="background"></div>
		</div>
	);
}

export default App;
