import React from "react";
import "../NavigationController.css";

const SELECTED_BUTTON_NAME = "Navigation-Button--Selected";
const UNSELECTED_BUTTON_NAME = "Navigation-Button--Unselected";

export function NavigationButton({
	buttonCategory,
	selectedCategory,
	setSelectedCategory,
}: {
	buttonCategory: string;
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
}): JSX.Element {
	return (
		<button
			className={
				buttonCategory === selectedCategory ? SELECTED_BUTTON_NAME : UNSELECTED_BUTTON_NAME
			}
			onClick={() => {
				setSelectedCategory(buttonCategory);
			}}
		>
			{buttonCategory}
		</button>
	);
}
