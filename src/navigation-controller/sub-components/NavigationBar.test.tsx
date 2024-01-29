import React from "react";
import {NavigationBar} from "./NavigationBar";
import {render, screen} from "@testing-library/react";
import {NavigationButton} from "./NavigationButton";

const CATEGORY_ONE = "About Me";
const CATEGORY_TWO = "Education";
const CATEGORY_THREE = "Employment";

const SINGLE_CATEGORY_LIST = [CATEGORY_ONE];
const MULTI_CATEGORY_LIST = [CATEGORY_ONE, CATEGORY_TWO, CATEGORY_THREE];

jest.mock("./NavigationButton", () => {
	return {
		__esModule: true,
		NavigationButton: jest.fn(),
	};
});

(NavigationButton as jest.Mock).mockImplementation(
	(props: {
		buttonCategory: string;
		selectedCategory: string;
		setSelectedCategory: (category: string) => void;
	}) => {
		return <div data-testid={props.buttonCategory}></div>;
	},
);

let selectedCategory: string, setSelectedCategory: (category: string) => void;

const NavBarWrapper = ({categories}: {categories: string[]}) => {
	[selectedCategory, setSelectedCategory] = React.useState<string>(CATEGORY_ONE);
	return (
		<NavigationBar
			categories={categories}
			selectedCategory={selectedCategory}
			setSelectedCategory={setSelectedCategory}
		></NavigationBar>
	);
};

describe("Navigation Bar Component Unit Tests", () => {
	test("Navigation Bar shows a single Navigation Button when passed in one category", () => {
		render(<NavBarWrapper categories={SINGLE_CATEGORY_LIST} />);

		expect(screen.getByTestId(SINGLE_CATEGORY_LIST[0])).toBeInTheDocument();
	});

	test("Navigation Bar creates a single Navigation Button with the useState", () => {
		render(<NavBarWrapper categories={SINGLE_CATEGORY_LIST} />);

		expect(NavigationButton).toHaveBeenCalledWith(
			{
				buttonCategory: SINGLE_CATEGORY_LIST[0],
				selectedCategory: selectedCategory,
				setSelectedCategory: setSelectedCategory,
			},
			{},
		);
	});

	test("Navigation Bar shows multiple Navigation Buttons when passed in multiple categories", () => {
		render(<NavBarWrapper categories={MULTI_CATEGORY_LIST} />);

		expect(screen.getByTestId(MULTI_CATEGORY_LIST[0])).toBeInTheDocument();

		MULTI_CATEGORY_LIST.forEach((category: string) => {
			expect(screen.getByTestId(category)).toBeInTheDocument();
		});
	});

	test("Navigation Bar creates multiple Navigation Buttons with the useState", () => {
		render(<NavBarWrapper categories={MULTI_CATEGORY_LIST} />);

		MULTI_CATEGORY_LIST.forEach((category: string) => {
			expect(NavigationButton).toHaveBeenCalledWith(
				{
					buttonCategory: category,
					selectedCategory: selectedCategory,
					setSelectedCategory: setSelectedCategory,
				},
				{},
			);
		});
	});
});
