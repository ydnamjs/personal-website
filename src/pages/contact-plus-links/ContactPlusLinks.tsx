import React from "react";
import "./ContactPlusLinks.css";

import emailIconWhite from "../../assets/contact-plus-links/Email_Icon_White.png";
import resumeIconWhite from "../../assets/contact-plus-links/Resume_Icon_White.png";
import linkedInWhite from "../../assets/contact-plus-links/LinkedIn_Icon_White.png";
import gitHubIconWhite from "../../assets/contact-plus-links/GitHub_Icon_White.png";

export function ContactPlusLinks() {
	return (
		<div className="contact-plus-links-page">
			<div className="contact-plus-links--row">
				<img src={emailIconWhite} className="contact-plus-links-section icon-section"></img>
				<div className="contact-plus-links-section"></div>
			</div>
			<div className="contact-plus-links--row">
				<div className="contact-plus-links-section"></div>
				<img
					src={resumeIconWhite}
					className="contact-plus-links-section icon-section"
				></img>
			</div>
			<div className="contact-plus-links--row">
				<img src={linkedInWhite} className="contact-plus-links-section icon-section"></img>
				<div className="contact-plus-links-section"></div>
			</div>
			<div className="contact-plus-links--row">
				<div className="contact-plus-links-section"></div>
				<img
					src={gitHubIconWhite}
					className="contact-plus-links-section icon-section"
				></img>
			</div>
		</div>
	);
}
