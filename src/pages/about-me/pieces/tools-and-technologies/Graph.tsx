import React from "react";
import "./Graph.css";
import {GraphType} from "./ToolsAndTechnologies";

interface GraphData {
	items: string[];
	experience: number[];
	yInterval: number;
	numLevels: number;
}

const graphKey = new Map<GraphType, GraphData>();
graphKey.set("Machine Learning", {
	items: ["Python", "PyTorch", "OpenCV"],
	experience: [4, 1, 1],
	yInterval: 1,
	numLevels: 5,
});

graphKey.set("Game Development", {
	items: ["Unreal Engine 4", "Godot", "Blender", "C++"],
	experience: [1.99999, 1, 1, 1],
	yInterval: 1,
	numLevels: 5,
});

graphKey.set("Web Development", {
	items: ["Java/Type Script", "React.js", "Relational Databases", "Document Databases"],
	experience: [1.99999, 1.99999, 1, 1],
	yInterval: 1,
	numLevels: 5,
});

export function ToolsAndTechnologiesGraph({graphType}: {graphType: GraphType}) {
	const graphData = graphKey.get(graphType);

	if (!graphData) {
		return <div className="tools-and-technologies-graph--dark">Error: Graph not found</div>;
	}

	const graphLines = [];
	const yLabels = [];
	for (let i = 0; i < graphData.numLevels; i++) {
		graphLines.push(<div className="graph-line"></div>);
		yLabels.push(<div className="y-axis-item">{i * graphData.yInterval}</div>);
	}
	yLabels.reverse();

	return (
		<div className="tools-and-technologies-graph--dark">
			<div className="graph-h-box">
				<div className="y-axis-label">Years Used</div>
				<div className="y-axis">{yLabels}</div>
				<div className="graph-lines">
					{graphLines}
					<div className="x-bars">
						{graphData.experience.map((item, index) => {
							return (
								<div
									className="x-bar"
									style={{
										height:
											"" +
											(item / (graphData.numLevels - 1)) *
												graphData.yInterval *
												100 +
											"%",
									}}
									key={"x-axis-item" + graphType + index}
								></div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="x-axis">
				{graphData.items.map((item, index) => {
					return (
						<div className="x-axis-item" key={"x-axis-item" + index}>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
}
