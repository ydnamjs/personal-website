import pictureOfMe from "../../../assets/about-me/MichaelSnead.jpg";
import React from "react";
import "../AboutMe.css";
import "./Picture.css";

export function Picture() {
	return <img src={pictureOfMe} className="about-me-section picture-section"></img>;
}
