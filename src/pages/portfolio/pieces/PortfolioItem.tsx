import React, {ReactElement} from "react";
import "./PortfolioItem.css";
import "../Portfolio.css";

export function PortfolioItem({
	title,
	description,
	techUsed,
	linkButtons,
}: {
	title: string;
	description: ReactElement;
	techUsed: string[];
	linkButtons: ReactElement[];
}) {
	return (
		<div className="portfolio-item">
			<div className="portfolio-section portfolio-item--info">
				<h2 className="portfolio-item--heading">{title}</h2>
				{description}
				<div className="tech-used">
					{techUsed.map((item, index) => {
						return <p key={"tech-used-" + title + index}>{item}</p>;
					})}
				</div>
			</div>
			<div className="portfolio-item--links">{linkButtons}</div>
		</div>
	);
}
