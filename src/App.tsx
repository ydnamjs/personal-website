import React, {useState} from "react";
import "./App.css";
import {Helmet} from "react-helmet";
import {AboutMe} from "./pages/about-me/AboutMe";
import {PageSelector} from "./PageSelector";

export type PageType = "About" | "Portfolio" | "Other Interests" | "Contact + Links";

function App() {
	const [page, setPage] = useState<PageType>("About");

	return (
		<div className="background">
			<Helmet>
				<title>Michael Snead</title>
				<meta name="description" content="Michael Snead | Personal Website"></meta>
			</Helmet>
			<div className="navigation-bar">
				<PageSelector page={page} setPage={setPage} buttonPage={"About"}></PageSelector>
				<PageSelector page={page} setPage={setPage} buttonPage={"Portfolio"}></PageSelector>
				<PageSelector
					page={page}
					setPage={setPage}
					buttonPage={"Other Interests"}
				></PageSelector>
				<PageSelector
					page={page}
					setPage={setPage}
					buttonPage={"Contact + Links"}
				></PageSelector>
			</div>
			{page === "About" && <AboutMe></AboutMe>}
		</div>
	);
}

export default App;
