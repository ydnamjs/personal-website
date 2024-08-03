import React from "react";
import "../../App.css";
import "./AboutMe.css";

import {NameHeader} from "./pieces/NameHeader";
import {Picture} from "./pieces/Picture";
import {Education} from "./pieces/Education";
import {ToolsAndTechnologies} from "./pieces/tools-and-technologies/ToolsAndTechnologies";

export function AboutMe() {
	return (
		<div className="page">
			<NameHeader></NameHeader>
			<div className="about-me--middle-row">
				<div className="panel about-me--interests about-me-section">
					<h2>Software Engineering</h2>
				</div>
				<div className="panel about-me--interests about-me-section">
					<h2>Machine Learning</h2>
				</div>
				<div className="panel about-me--interests about-me-section">
					<h2>Game Development</h2>
				</div>
			</div>
			<div className="about-me--middle-row">
				<Picture></Picture>
				<Education></Education>
			</div>
			<ToolsAndTechnologies></ToolsAndTechnologies>
		</div>
	);
}
