import React, {useState} from "react";
import "./Portfolio.css";
import "./pieces/PortfolioItem.css";

export type Portfolio = "Web Dev" | "Machine Learning" | "Games";

import {PortfolioButton} from "./pieces/PortfolioButton";
import {PortfolioItem} from "./pieces/PortfolioItem";

const linkButtons = [
	<a
		className="portfolio-item--links-item"
		key={"testA"}
		href="https://bkbranson.github.io/team-2-final-project/"
		target="_blank"
		rel="noreferrer"
	>
		Live Deployment
	</a>,
	<a
		className="portfolio-item--links-item"
		key={"testB"}
		href="https://github.com/bkbranson/team-2-final-project"
		target="_blank"
		rel="noreferrer"
	>
		Source Code
	</a>,
];
const linkButtons2 = [
	<a
		className="portfolio-item--links-item"
		key={"testE"}
		href="https://devpost.com/software/sound-ificator-inator"
		target="_blank"
		rel="noreferrer"
	>
		Dev Post
	</a>,
	<a
		className="portfolio-item--links-item"
		key={"testE"}
		href="https://www.youtube.com/watch?v=qyBQygNTVF8"
		target="_blank"
		rel="noreferrer"
	>
		Video Demo
	</a>,
	<a
		className="portfolio-item--links-item"
		key={"testE"}
		href="https://github.com/henhackz/henhacks.github.io"
		target="_blank"
		rel="noreferrer"
	>
		Source Code
	</a>,
];

export function Portfolio() {
	const [activePortfolio, setActivePortfolio] = useState<Portfolio>("Web Dev");

	return (
		<div className="portfolio-page">
			<div className="portfolio-section">
				<PortfolioButton
					activePortfolio={activePortfolio}
					setActivePortfolio={setActivePortfolio}
					buttonPortfolio={"Web Dev"}
				></PortfolioButton>
				<PortfolioButton
					activePortfolio={activePortfolio}
					setActivePortfolio={setActivePortfolio}
					buttonPortfolio={"Machine Learning"}
				></PortfolioButton>
				<PortfolioButton
					activePortfolio={activePortfolio}
					setActivePortfolio={setActivePortfolio}
					buttonPortfolio={"Games"}
				></PortfolioButton>
			</div>
			<PortfolioItem
				title={"Sound-ificator-inator"}
				description={
					<>
						<p>
							A react web app that simulates a 3D sound enviornment that reacts to
							rotations in real time using gyro orientations recieved from a raspberry
							pi. Intended to reduce overstimulation in noisy environments for
							neurodivergent people.
						</p>
						<p>
							Created for and awarded 1st place in the 2024 Hen Hacks Hackathon Best
							Accessibilty Hack Category.
						</p>
					</>
				}
				techUsed={[
					"JavaScript",
					"three.js",
					"HTML",
					"CSS",
					"Git",
					"GitHub",
					"Raspberry Pi",
					"API",
				]}
				linkButtons={linkButtons2}
			></PortfolioItem>
			<PortfolioItem
				title={"Corkboard Website"}
				description={
					<p>
						Basic &quot;drag and drop&quot; web application that can be used to create
						note cards on a corkboard Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Veniam facilis esse delectus beatae laborum harum
						quibusdam illo. Harum illum adrem fuga omnis assumenda, velit optio voluptas
						repudiandae aspernatur doloribus.
					</p>
				}
				techUsed={["React", "Typescript", "HTML", "CSS", "Git", "GitHub", "React DnD"]}
				linkButtons={linkButtons}
			></PortfolioItem>
		</div>
	);
}
