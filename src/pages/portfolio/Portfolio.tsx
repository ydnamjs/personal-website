import React, {useState} from "react";
import "./Portfolio.css";

export type Portfolio = "Web Dev" | "Machine Learning" | "Games";

import {PortfolioButton} from "./pieces/PortfolioButton";
import {PortfolioItem} from "./pieces/PortfolioItem";

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
			<PortfolioItem></PortfolioItem>
		</div>
	);
}
