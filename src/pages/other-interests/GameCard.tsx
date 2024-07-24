import React from "react";
import "./CarouselCard.css";

export function AlbumCard({src, title}: {src: string; title: string}) {
	return (
		<div className="carousel-card">
			<img src={src} className="carousel-card--image"></img>
			<p className="carousel-card--label">{title}</p>
		</div>
	);
}
