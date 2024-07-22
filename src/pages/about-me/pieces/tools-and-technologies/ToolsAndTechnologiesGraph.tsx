import React from "react";
import "./ToolsAndTechnologiesGraph.css";

//const GRAPH_ERROR_MESSAGE = "ERROR: Graph does not exist";

export function ToolsAndTechnologiesGraph() {
	return (
		<div className="tools-and-technologies-graph--dark">
			<div className="graph-h-box">
				<div className="y-axis">
					<div className="y-axis-item">4</div>
					<div className="y-axis-item">3</div>
					<div className="y-axis-item">2</div>
					<div className="y-axis-item">1</div>
					<div className="y-axis-item">0</div>
				</div>
				<div className="graph-lines">
					<div className="graph-line"></div>
					<div className="graph-line"></div>
					<div className="graph-line"></div>
					<div className="graph-line"></div>
					<div className="graph-line"></div>
				</div>
			</div>
			<div className="x-axis">
				<div className="x-axis-item">TypeScript</div>
				<div className="x-axis-item">React</div>
				<div className="x-axis-item">SQL</div>
				<div className="x-axis-item">Flask</div>
			</div>
		</div>
	);
}
