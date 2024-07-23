import React from "react";
import "./SelectorButton.css";
import {GraphType} from "./ToolsAndTechnologies";

export function SelectorButton({
	graphType,
	setGraphType,
	buttonType,
}: {
	graphType: GraphType;
	setGraphType: (arg0: GraphType) => void;
	buttonType: GraphType;
}) {
	return (
		<button
			className={
				graphType === buttonType ?
					"selector-button selector-button--active"
				:	"selector-button selector-button--inactive"
			}
			onClick={() => {
				setGraphType(buttonType);
			}}
		>
			{buttonType}
		</button>
	);
}
