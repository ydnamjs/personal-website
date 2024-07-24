import React, {ReactElement, useEffect, useRef, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

import leftArrow from "../../assets/carousel/Left_Arrow_Black.png";
import rightArrow from "../../assets/carousel/Right_Arrow_Black.png";

export function ImageCarousel({headingText, items}: {headingText: string; items: ReactElement[]}) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (elementRef.current) {
				setWidth(elementRef.current.getBoundingClientRect().width);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [index, setIndex] = useState(0);

	return (
		<div>
			<h2
				className="carousel--heading"
				style={{
					width:
						width > 940 ? "890px"
						: width > 660 ? "630px"
						: "360px",
				}}
			>
				{headingText}
			</h2>
			<div className="carousel" ref={elementRef}>
				<button
					onClick={() => {
						setIndex((index - 1 + items.length) % items.length);
					}}
				>
					<img src={leftArrow} />
				</button>
				<div>{items[index]}</div>
				{width > 660 && <div>{items[(index + 1) % items.length]}</div>}
				{width > 940 && <div>{items[(index + 2) % items.length]}</div>}
				<button
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
