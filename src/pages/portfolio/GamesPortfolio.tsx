import React from "react";
import {PortfolioItem} from "./pieces/PortfolioItem";

export function GamesPortfolio() {
	return (
		<>
			<PortfolioItem
				title={"Build Blocks"}
				description={
					<p>
						A puzzle game designed to teach fundamental algorithms and looping to
						elementary and middle school students.
					</p>
				}
				techUsed={["TypeScript", "Phazer 3", "Node Package Manager", "Git", "GitHub"]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"build-blocks-link-1"}
						href="https://spring-2023-cisc374.github.io/group-project-build-blocks/"
						target="_blank"
						rel="noreferrer"
					>
						Live Deployment
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"build-blocks-link-2"}
						href="https://github.com/Spring-2023-CISC374/group-project-build-blocks"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>,
				]}
				isAnimationLeft={true}
			></PortfolioItem>
		</>
	);
}
