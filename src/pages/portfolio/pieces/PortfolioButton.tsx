import React from "react";
import "./PortfolioButton.css";
import {Portfolio} from "../Portfolio";

export function PortfolioButton({
	activePortfolio,
	setActivePortfolio,
	buttonPortfolio,
}: {
	activePortfolio: Portfolio;
	setActivePortfolio: (portfolio: Portfolio) => void;
	buttonPortfolio: Portfolio;
}) {
	return (
		<button
			className={
				activePortfolio === buttonPortfolio ?
					"portfolio-button--active"
				:	"portfolio-button--inactive"
			}
			onClick={() => {
				setActivePortfolio(buttonPortfolio);
			}}
		>
			{buttonPortfolio}
		</button>
	);
}
