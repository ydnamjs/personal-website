import React from "react";
import "./CarouselCard.css";

export function CarouselCard({src, label}: {src: string; label: string}) {
	return (
		<div className="carousel-card">
			<img src={src} className="carousel-card--image"></img>
			<p className="carousel-card--label">{label}</p>
		</div>
	);
}
