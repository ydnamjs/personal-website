import React, {useState} from "react";
import {ToolsAndTechnologiesGraph} from "./Graph";
import {SelectorButton} from "./SelectorButton";

import "./ToolsAndTechnologies.css";
import "../../AboutMe.css";

export type GraphType = "Web Development" | "Machine Learning" | "Game Development";

export function ToolsAndTechnologies() {
	const [graphType, setGraphType] = useState<GraphType>("Web Development");

	return (
		<div className="about-me-section tools-and-technology-section">
			<h2 className="tools-and-technology--header">Tools And Technologies</h2>
			<div style={{float: "right"}}>
				<SelectorButton
					graphType={graphType}
					setGraphType={setGraphType}
					buttonType={"Web Development"}
				></SelectorButton>
				<SelectorButton
					graphType={graphType}
					setGraphType={setGraphType}
					buttonType={"Machine Learning"}
				></SelectorButton>
				<SelectorButton
					graphType={graphType}
					setGraphType={setGraphType}
					buttonType={"Game Development"}
				></SelectorButton>
			</div>
			<ToolsAndTechnologiesGraph></ToolsAndTechnologiesGraph>
		</div>
	);
}
