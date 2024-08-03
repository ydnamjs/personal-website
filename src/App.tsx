import React, {useState} from "react";
import "./App.css";
import {AboutMe} from "./pages/about-me/AboutMe";
import {PageSelector} from "./PageSelector";
import {ContactPlusLinks} from "./pages/contact-plus-links/ContactPlusLinks";
import {OtherInterests} from "./pages/other-interests/OtherInterests";
import {Portfolio} from "./pages/portfolio/Portfolio";

export type PageType = "About" | "Portfolio" | "Other Interests" | "Contact + Links";

function App() {
	const [page, setPage] = useState<PageType>("About");

	return (
		<div className="background">
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
			{page === "Portfolio" && <Portfolio></Portfolio>}
			{page === "Other Interests" && <OtherInterests></OtherInterests>}
			{page === "Contact + Links" && <ContactPlusLinks></ContactPlusLinks>}
		</div>
	);
}

export default App;
