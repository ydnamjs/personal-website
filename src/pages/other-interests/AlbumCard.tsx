import React from "react";
import "./CarouselCard.css";

export function AlbumCard({src, title, band}: {src: string; title: string; band: string}) {
	return (
		<div className="carousel-card">
			<img src={src} className="carousel-card--image"></img>
			<p className="carousel-card--label">
				<span className="album-name">{title}</span>
				<br />
				{band}
			</p>
		</div>
	);
}
