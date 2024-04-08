import React from "react";
import "./AboutMe.css";
import pictureOfMe from "../assets/MichaelSnead.jpg";

export function AboutMe() {
	return (
		<div className="panel-container">
			<img src={pictureOfMe} className="self-picture"></img>
			<div className="panel-text">
				<h1 className="panel-text">About Me</h1>
				<p className="panel-text">I am a person I like to code</p>
				<p>This is a 2nd paragraph</p>
				<p className="panel-text">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</p>
			</div>
			<div className="panel-text">
				<h1>Education</h1>
				<span className="panel-text">I went to school</span>
				<span>
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
					<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>E
				</span>
			</div>
		</div>
	);
}
