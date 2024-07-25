import React from "react";
import "./PortfolioItem.css";
import "../Portfolio.css";

export function PortfolioItem() {
	return (
		<div className="portfolio-section portfolio-item">
			<h2 className="portfolio-item--heading">Corkboard Website</h2>
			<p>
				Basic &quot;drag and drop&quot; web application that can be used to create note
				cards on a corkboard
			</p>
			<div className="tech-used">
				<p>React</p>
				<p>TypeScript</p>
				<p>HTML</p>
				<p>CSS</p>
				<p>Git</p>
				<p>GitHub</p>
				<p>React DnD</p>
			</div>
		</div>
	);
}
