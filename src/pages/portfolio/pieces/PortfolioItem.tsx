import React from "react";
import "./PortfolioItem.css";
import "../Portfolio.css";

export function PortfolioItem() {
	return (
		<div className="portfolio-item">
			<div className="portfolio-section portfolio-item--info">
				<h2 className="portfolio-item--heading">Corkboard Website</h2>
				<p>
					Basic &quot;drag and drop&quot; web application that can be used to create note
					cards on a corkboard Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Veniam facilis esse delectus beatae laborum harum quibusdam illo. Harum illum ad
					rem fuga omnis assumenda, velit optio voluptas repudiandae aspernatur doloribus.
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
			<div className="portfolio-item--links">
				<div className="portfolio-item--links-item">
					<p>Live Deployment</p>
				</div>
				<div className="portfolio-item--links-item">
					<p>Live Deployment</p>
				</div>
				<div className="portfolio-item--links-item">
					<p>Live Deployment</p>
				</div>
			</div>
		</div>
	);
}
