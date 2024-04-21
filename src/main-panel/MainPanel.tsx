import React, {PropsWithChildren, useState} from "react";
import "./MainPanel.css";
import {useViewportMonitor} from "../ViewportMonitor";

const MAX_ASPECT_RATIO = 16.0 / 9.0;
const MAX_RATIO_WIDTH = 75;
const MAX_RATIO_LEFT = 12.5;
const MIN_ASPECT_RATIO = 12.0 / 9.0;
const MIN_RATIO_WIDTH = 100;
const MIN_RATIO_LEFT = 0.0;

const WIDTH_SLOPE = (MAX_RATIO_WIDTH - MIN_RATIO_WIDTH) / (MAX_ASPECT_RATIO - MIN_ASPECT_RATIO);
const WIDTH_INTERCEPT = MAX_RATIO_WIDTH - WIDTH_SLOPE * MAX_ASPECT_RATIO;

const LEFT_SLOPE = (MAX_RATIO_LEFT - MIN_RATIO_LEFT) / (MAX_ASPECT_RATIO - MIN_ASPECT_RATIO);
const LEFT_INTERCEPT = MAX_RATIO_LEFT - LEFT_SLOPE * MAX_ASPECT_RATIO;

function widthCalculator(viewportWidth: number, viewportHeight: number): string {
	return (
		Math.max(
			Math.min(
				(viewportWidth / viewportHeight) * WIDTH_SLOPE + WIDTH_INTERCEPT,
				MIN_RATIO_WIDTH,
			),
			0,
		) + "%"
	);
}

function leftCalculator(viewportWidth: number, viewportHeight: number): string {
	return (
		Math.max(
			Math.min(
				(viewportWidth / viewportHeight) * LEFT_SLOPE + LEFT_INTERCEPT,
				MAX_RATIO_LEFT,
			),
			0,
		) + "%"
	);
}

export function MainPanel(props: PropsWithChildren) {
	const [viewportWidth, setViewportWidth] = useState(
		window.innerWidth || document.documentElement.clientWidth,
	);
	const [viewportHeight, setViewportHeight] = useState(
		window.innerHeight || document.documentElement.clientHeight,
	);

	useViewportMonitor(setViewportWidth, setViewportHeight);

	return (
		<div
			className="main-panel"
			style={{
				width: widthCalculator(viewportWidth, viewportHeight),
				left: leftCalculator(viewportWidth, viewportHeight),
			}}
		>
			{props.children}
			{/* <img src={pictureOfMe} style={{maxInlineSize: "100%"}}></img>
			<h1>About Me</h1>
			<p>I am a person I like to code</p>
			<p>This is a 2nd paragraph</p>
			<p className="panel-text">
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
			</p>
			<h1>Education</h1>
			<span className="panel-text">I went to school</span>
			<span>
				<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
				<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a
				<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>E
			</span> */}
		</div>
	);
}
