import React from "react";
import "./ToolsAndTechnologies.css";
import {ToolsAndTechnologiesGraphSelector} from "./ToolsAndTechnologiesGraphSelector";
import {ToolsAndTechnologiesGraph} from "./ToolsAndTechnologiesGraph";

export function ToolsAndTechnologies() {
	return (
		<div className="tools-and-technology-section--dark">
			<h2>Tools And Technologies</h2>
			<ToolsAndTechnologiesGraphSelector></ToolsAndTechnologiesGraphSelector>
			<ToolsAndTechnologiesGraph></ToolsAndTechnologiesGraph>
		</div>
	);
}
