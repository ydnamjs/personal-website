import React from "react";
import {PortfolioItem} from "./pieces/PortfolioItem";

export function MachineLearningPortfolio() {
	return (
		<>
			<PortfolioItem
				title={"Automatic D6 Counter"}
				description={
					<>
						<p>
							Computer Vision model for detecting and classifying six sided dice in
							images
						</p>
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
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"d6-counter-link-1"}
						href="https://ydnamjs.github.io/d6-counter-frontend/"
						target="_blank"
						rel="noreferrer"
					>
						Web Showcase
					</a>,
				]}
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
