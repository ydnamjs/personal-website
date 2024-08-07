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
							to create a dice tower which sums up all dice rolled at the bottom.
						</p>
						<p>Work In Progress!</p>
					</>
				}
				techUsed={[
					"Python",
					"Pytorch",
					"Torchvision",
					"OpenCV",
					"Pyinvoke",
					"Blender",
					"Blender Python API",
				]}
				linkButtons={[]}
				isAnimationLeft={true}
			/>
			<PortfolioItem
				title={"Python Random Forest"}
				description={
					<p>
						Python implementation of the random forest classification algorithm. Created
						to better understand the algorithm.
					</p>
				}
				techUsed={["Python", "Git", "GitHub"]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
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
