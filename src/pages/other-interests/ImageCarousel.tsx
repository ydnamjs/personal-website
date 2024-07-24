import React, {useEffect, useRef, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

import leftArrow from "../../assets/carousel/Left_Arrow_Black.png";
import rightArrow from "../../assets/carousel/Right_Arrow_Black.png";

import albumCargo from "../../assets/other-interests/favorite-albums/Cargo.jpg";
import albumNothingHappens from "../../assets/other-interests/favorite-albums/NothingHappens.jpg";
import albumOnlyALad from "../../assets/other-interests/favorite-albums/OnlyALad.jpg";
// import albumOpenYourEyes from "../../assets/other-interests/favorite-albums/Cargo.jpg";
// import albumRandomAccessMemories from "../../assets/other-interests/favorite-albums/Cargo.jpg";
// import albumRemainInLight from "../../assets/other-interests/favorite-albums/Cargo.jpg";

export function ImageCarousel() {
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
		<div className="carousel" ref={elementRef}>
			<div className="carousel-row">
				<button>
					<img src={leftArrow} />
				</button>
				<img className="carousel-image" src={albumCargo} />
				{width > 600 && <img className="carousel-image" src={albumNothingHappens} />}
				{width > 900 && <img className="carousel-image" src={albumOnlyALad} />}
				<button>
					<img src={rightArrow} />
				</button>
			</div>
		</div>
	);
}
