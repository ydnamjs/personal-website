import React from "react";
import "./ToolsAndTechnologies.css";
import {ToolsAndTechnologiesGraphSelector} from "./ToolsAndTechnologiesGraphSelector";
import {ToolsAndTechnologiesGraph} from "./ToolsAndTechnologiesGraph";
import "../../AboutMe.css";

export function ToolsAndTechnologies() {
	return (
		<div className="about-me-section tools-and-technology-section">
			<h2>Tools And Technologies</h2>
			<ToolsAndTechnologiesGraphSelector></ToolsAndTechnologiesGraphSelector>
			<ToolsAndTechnologiesGraph></ToolsAndTechnologiesGraph>
		</div>
	);
}
