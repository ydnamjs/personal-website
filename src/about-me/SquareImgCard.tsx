//import Module from "module";
import React from "react";
import "./SquareImgCard.css";
import "./AboutMe.css";

export function SquareImgCard({image, title}: {image: string; title: string}) {
	return (
		<div className="card shadow">
			<img src={image}></img>
			<span>{title}</span>
		</div>
	);
}
