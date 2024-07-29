import React from "react";
import {PortfolioItem} from "./pieces/PortfolioItem";

export function MachineLearningPortfolio() {
	return (
		<>
			<PortfolioItem
				title={"Python Random Forest"}
				description={
					<p>
						Python implementation of the random forest classification algorithm. Created
						to better understand the project
					</p>
				}
				techUsed={["Python", "Git", "GitHub"]}
				linkButtons={[
					<a
						className="portfolio-item--links-item"
						key={"python-random-forest-link-1"}
						href="https://github.com/ydnamjs/random-forest-python"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>,
				]}
			/>
		</>
	);
}
