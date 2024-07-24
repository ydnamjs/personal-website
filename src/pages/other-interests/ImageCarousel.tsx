import React, {useEffect, useRef, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

import leftArrow from "../../assets/carousel/Left_Arrow_Black.png";
import rightArrow from "../../assets/carousel/Right_Arrow_Black.png";

import albumCargo from "../../assets/other-interests/favorite-albums/Cargo.jpg";
import albumNothingHappens from "../../assets/other-interests/favorite-albums/NothingHappens.jpg";
import albumOnlyALad from "../../assets/other-interests/favorite-albums/OnlyALad.jpg";
import {CarouselCard} from "./CarouselCard";
// import albumOpenYourEyes from "../../assets/other-interests/favorite-albums/Cargo.jpg";
// import albumRandomAccessMemories from "../../assets/other-interests/favorite-albums/Cargo.jpg";
// import albumRemainInLight from "../../assets/other-interests/favorite-albums/Cargo.jpg";

export function ImageCarousel({headingText}: {headingText: string}) {
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
				<button>
					<img src={leftArrow} />
				</button>
				<CarouselCard src={albumCargo} label={'"Cargo" by Men At Work'}></CarouselCard>
				{width > 660 && (
					<CarouselCard
						src={albumNothingHappens}
						label={'"Nothing Happens" by Wallows'}
					></CarouselCard>
				)}
				{width > 940 && (
					<CarouselCard
						src={albumOnlyALad}
						label={'"Only A Lad" by Oingo Boingo'}
					></CarouselCard>
				)}
				<button>
					<img src={rightArrow} />
				</button>
			</div>
		</div>
	);
}
