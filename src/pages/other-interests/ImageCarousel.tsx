import React, {ReactElement, useState} from "react";
import "./ImageCarousel.css";

import leftArrow from "../../assets/carousel/Left_Arrow_Black.png";
import rightArrow from "../../assets/carousel/Right_Arrow_Black.png";

export function ImageCarousel({
	headingText,
	items,
	isSlideLeft,
}: {
	headingText: string;
	items: ReactElement[];
	isSlideLeft: boolean;
}) {
	const [index, setIndex] = useState(0);

	return (
		<div className={isSlideLeft ? "carousel-slide-left" : "carousel-slide-right"}>
			<h2 className="panel carousel--heading">{headingText}</h2>
			<div className="carousel">
				<button
					className="panel carousel-button"
					onClick={() => {
						setIndex((index - 1 + items.length) % items.length);
					}}
				>
					<img src={leftArrow} />
				</button>
				<div className="carousel--container-a">{items[index]}</div>
				<div className="carousel--container-b">{items[(index + 1) % items.length]}</div>
				<div className="carousel--container-c">{items[(index + 2) % items.length]}</div>

				<button
					className="panel carousel-button"
					onClick={() => {
						setIndex((index + 1) % items.length);
					}}
				>
					<img src={rightArrow} />
				</button>
			</div>
		</div>
	);
}
