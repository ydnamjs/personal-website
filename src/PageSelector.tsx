import React from "react";
import "./PageSelector.css";
import {PageType} from "./App";

export function PageSelector({
	page,
	setPage,
	buttonPage,
}: {
	page: PageType;
	setPage: (page: PageType) => void;
	buttonPage: PageType;
}) {
	return (
		<button
			className={page === buttonPage ? "page-selector--active" : "page-selector--inactive"}
			onClick={() => {
				setPage(buttonPage);
			}}
		>
			{buttonPage}
		</button>
	);
}
