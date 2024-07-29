import React from "react";
import {PortfolioItem} from "./pieces/PortfolioItem";

export function MachineLearningPortfolio() {
	return (
		<>
			<PortfolioItem
				title={"Automatic Dice Counter"}
				description={
					<>
						<p>
							Computer Vision model for segmententing and classifying polyhedral dice
							for use to automatically sum the total for use in table top roleplaying
							games.
						</p>
						<p>Work In Progress!</p>
					</>
				}
				techUsed={[
					"Python, Pytorch",
					"OpenCV",
					"Pyinvoke",
					"Blender",
					"Blender Python API",
				]}
				linkButtons={[]}
				isAnimationLeft={false}
			/>
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
				isAnimationLeft={false}
			/>
		</>
	);
}
