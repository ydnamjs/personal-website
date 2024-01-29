import React from "react";
import "../NavigationController.css";
import {NavigationButton} from "./NavigationButton";

export function NavigationBar({
	categories,
	selectedCategory,
	setSelectedCategory,
}: {
	categories: string[];
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
}): JSX.Element {
	return (
		<div className="Navigation-Bar">
			{categories.map((category: string) => {
				return (
					<NavigationButton
						buttonCategory={category}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						key={category}
					></NavigationButton>
				);
			})}
		</div>
	);
}
