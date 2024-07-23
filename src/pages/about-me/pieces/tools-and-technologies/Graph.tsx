import React from "react";
import "./Graph.css";

const MACHINE_LEARNING_ITEMS = ["Python", "PyTorch", "OpenCV"];
const MACHINE_LEARNING_EXPERIENCE = [4, 1, 1];
const MACHINE_LEARNING_Y_INTERVAL = 1;
const MACHINE_LEARNING_Y_LEVELS = 5;

export function ToolsAndTechnologiesGraph() {
	const graphLines = [];
	const yLabels = [];
	for (let i = 0; i < MACHINE_LEARNING_Y_LEVELS; i++) {
		graphLines.push(<div className="graph-line"></div>);
		yLabels.push(<div className="y-axis-item">{i * MACHINE_LEARNING_Y_INTERVAL}</div>);
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
						{MACHINE_LEARNING_EXPERIENCE.map((item, index) => {
							return (
								<div
									className="x-bar"
									style={{
										height:
											"" +
											(item / (MACHINE_LEARNING_Y_LEVELS - 1)) *
												MACHINE_LEARNING_Y_INTERVAL *
												100 +
											"%",
									}}
									key={"x-axis-item" + index}
								></div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="x-axis">
				{MACHINE_LEARNING_ITEMS.map((item, index) => {
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
