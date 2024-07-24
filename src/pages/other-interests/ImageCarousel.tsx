import React, {useEffect, useRef, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

import leftArrow from "../../assets/carousel/Left_Arrow_Black.png";
import rightArrow from "../../assets/carousel/Right_Arrow_Black.png";

import albumCargo from "../../assets/other-interests/favorite-albums/Cargo.jpg";
import albumNothingHappens from "../../assets/other-interests/favorite-albums/NothingHappens.jpg";
import albumOnlyALad from "../../assets/other-interests/favorite-albums/OnlyALad.jpg";
import albumOpenYourEyes from "../../assets/other-interests/favorite-albums/OpenYourEyes.jpg";
import albumRandomAccessMemories from "../../assets/other-interests/favorite-albums/RandomAccessMemories.jpg";
import albumRemainInLight from "../../assets/other-interests/favorite-albums/RemainInLight.jpg";

import {CarouselCard} from "./CarouselCard";

const albums = [
	albumCargo,
	albumNothingHappens,
	albumOnlyALad,
	albumOpenYourEyes,
	albumRandomAccessMemories,
	albumRemainInLight,
];

const labels = [
	'"Cargo" by Men At Work',
	'"Nothing Happens" by Wallows',
	'"Only A Lad" by Oingo Boingo',
	'"Open Your Eyes" by Goldfinger',
	'"Random Access Memories" by Daft Punk',
	'"Remain In Light" by Talking Heads',
];

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
						setIndex((index - 1) % albums.length);
					}}
				>
					<img src={leftArrow} />
				</button>
				<CarouselCard src={albums[index]} label={labels[index]}></CarouselCard>
				{width > 660 && (
					<CarouselCard
						src={albums[(index + 1) % albums.length]}
						label={labels[(index + 1) % labels.length]}
					></CarouselCard>
				)}
				{width > 940 && (
					<CarouselCard
						src={albums[(index + 2) % albums.length]}
						label={labels[(index + 2) % labels.length]}
					></CarouselCard>
				)}
				<button
					onClick={() => {
						setIndex((index + 1) % albums.length);
					}}
				>
					<img src={rightArrow} />
				</button>
			</div>
		</div>
	);
}
