import React from "react";
import "./OtherInterests.css";
import {ImageCarousel} from "./ImageCarousel";

export function OtherInterests() {
	return (
		<div className="other-interests-page">
			<ImageCarousel headingText="Favorite Albums"></ImageCarousel>
			<ImageCarousel headingText="Favorite Video Games"></ImageCarousel>
		</div>
	);
}
