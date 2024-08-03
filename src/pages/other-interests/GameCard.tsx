import React from "react";
import "./CarouselCard.css";

export function GameCard({src, title}: {src: string; title: string}) {
	return (
		<div className="carousel-card">
			<img src={src} className="carousel-card--image"></img>
			<p className="panel carousel-card--label">{title}</p>
		</div>
	);
}
