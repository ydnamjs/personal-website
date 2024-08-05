import React, {ReactElement} from "react";
import "./PortfolioItem.css";
import "../Portfolio.css";

export function PortfolioItem({
	title,
	description,
	techUsed,
	linkButtons,
	isAnimationLeft,
}: {
	title: string;
	description: ReactElement;
	techUsed: string[];
	linkButtons: ReactElement[];
	isAnimationLeft: boolean;
}) {
	return (
		<div className={isAnimationLeft ? "portfolio-item-left" : "portfolio-item-right"}>
			<div className="panel portfolio-section portfolio-item--info">
				<h2 className="portfolio-item--heading">{title}</h2>
				{description}
				<div className="tech-used">
					{techUsed.map((item, index) => {
						return <p key={"tech-used-" + title + index}>{item}</p>;
					})}
				</div>
			</div>
			{linkButtons.length > 0 && <div className="portfolio-item--links">{linkButtons}</div>}
		</div>
	);
}
