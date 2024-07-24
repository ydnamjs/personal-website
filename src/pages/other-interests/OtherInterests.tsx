import React from "react";
import "./OtherInterests.css";
import {ImageCarousel} from "./ImageCarousel";

export function OtherInterests() {
	return (
		<div className="other-interests-page">
			<h2>Favorite Albums</h2>
			<ImageCarousel></ImageCarousel>
			<h2>Favorite Video Games</h2>
			<ImageCarousel></ImageCarousel>
		</div>
	);
}
