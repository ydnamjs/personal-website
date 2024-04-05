import React from "react";
import "./App.css";

import pictureOfMe from "./assets/MichaelSnead.jpg";

function App() {
	return (
		<div className="container">
			<div className="main-panel">
				<img src={pictureOfMe}></img>
				<h1>About Me</h1>
				<p>I am a person I like to code</p>
				<p>This is a 2nd paragraph</p>
				<p className="panel-text">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</p>
				<h1>Education</h1>
				<span className="panel-text">I went to school</span>
				<span>
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>E
				</span>
			</div>
			<div className="background"></div>
		</div>
	);
}

export default App;
