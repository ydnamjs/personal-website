import React from "react";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {NavigationButton} from "./NavigationButton";

const BUTTON_CATEGORY = "About Me";
const OTHER_CATEGORY = "Education";

// These need to be the same as the classes in NavigationController.css
const SELECTED_BUTTON_CLASS = "Navigation-Button--Selected";
const UNSELECTED_BUTTON_CLASS = "Navigation-Button--Unselected";

let selectedCategory, setSelectedCategory: (category: string) => void;
const NavButtonWrapper = ({initialCategory}: {initialCategory: string}) => {
	[selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);
	return (
		<NavigationButton
			buttonCategory={BUTTON_CATEGORY}
			selectedCategory={selectedCategory}
			setSelectedCategory={setSelectedCategory}
		></NavigationButton>
	);
};

describe("Navigation Button Component Tests", () => {
	test("Navigation Button uses selected style when initial category matches", () => {
		render(<NavButtonWrapper initialCategory={BUTTON_CATEGORY} />);

		const testButton = screen.getByText(BUTTON_CATEGORY);

		expect(testButton).toHaveClass(SELECTED_BUTTON_CLASS);
	});

	test("Navigation Button uses unselected style when initial category does not match", () => {
		render(<NavButtonWrapper initialCategory={OTHER_CATEGORY} />);

		const testButton = screen.getByText(BUTTON_CATEGORY);

		expect(testButton).toHaveClass(UNSELECTED_BUTTON_CLASS);
	});

	test("When the selected category changes to match the Navigation Button, the button uses the selected style", () => {
		render(<NavButtonWrapper initialCategory={OTHER_CATEGORY} />);

		const testButton = screen.getByText(BUTTON_CATEGORY);

		expect(testButton).toHaveClass(UNSELECTED_BUTTON_CLASS);

		act(() => {
			setSelectedCategory(BUTTON_CATEGORY);
		});

		expect(testButton).toHaveClass(SELECTED_BUTTON_CLASS);
	});

	test("When the selected category changes to no longer match the Navigation Button, the button uses the unselected style", () => {
		render(<NavButtonWrapper initialCategory={BUTTON_CATEGORY} />);

		const testButton = screen.getByText(BUTTON_CATEGORY);

		expect(testButton).toHaveClass(SELECTED_BUTTON_CLASS);

		act(() => {
			setSelectedCategory(OTHER_CATEGORY);
		});

		expect(testButton).toHaveClass(UNSELECTED_BUTTON_CLASS);
	});

	test("Clicking a Navigation Button changes the selected category to that of the button via the setter passed in", () => {
		const setSelectedCategorySpy = jest.fn();

		render(
			<NavigationButton
				buttonCategory={BUTTON_CATEGORY}
				selectedCategory={OTHER_CATEGORY}
				setSelectedCategory={setSelectedCategorySpy}
			/>,
		);

		const testButton = screen.getByText(BUTTON_CATEGORY);

		fireEvent.click(testButton);

		expect(setSelectedCategorySpy).toHaveBeenCalledWith(BUTTON_CATEGORY);
	});
});
