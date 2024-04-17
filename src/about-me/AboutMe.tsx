import React from "react";
import "./AboutMe.css";
import pictureOfMe from "../assets/MichaelSnead.jpg";
import {Intro} from "./panels/Intro";
import {Education} from "./panels/Education";
import {WhyCompSci} from "./panels/WhyCompSci";
import {OtherInterests} from "./panels/OtherInterests";

export function AboutMe() {
	return (
		<div className="panel-container">
			<div className="title-bar">
				<img src={pictureOfMe} className="self-picture shadow"></img>
				<Intro />
			</div>
			<h1>Education</h1>
			<Education />
			<h1>Why Computer Science?</h1>
			<WhyCompSci />
			<h1>Other Interests</h1>
			<OtherInterests />
		</div>
	);
}
