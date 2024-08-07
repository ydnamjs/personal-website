import React, {useState} from "react";
import "../../App.css";
import "./Portfolio.css";
import "./pieces/PortfolioItem.css";

export type Portfolio = "Web Dev" | "Machine Learning" | "Games";

import {PortfolioButton} from "./pieces/PortfolioButton";
import {WebDevPortfolio} from "./WebDevPortfolio";
import {MachineLearningPortfolio} from "./MachineLearningPortfolio";
import {GamesPortfolio} from "./GamesPortfolio";

export function Portfolio() {
	const [activePortfolio, setActivePortfolio] = useState<Portfolio>("Web Dev");

	return (
		<div className="page">
			<div className="panel portfolio-section portfolio-slide-down">
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
			{activePortfolio === "Web Dev" && <WebDevPortfolio />}
			{activePortfolio === "Machine Learning" && <MachineLearningPortfolio />}
			{activePortfolio === "Games" && <GamesPortfolio />}
		</div>
	);
}
