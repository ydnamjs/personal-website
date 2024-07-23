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
				<img src={emailIconWhite} className="contact-plus-links--icon"></img>
				<div className="contact-plus-links--descripton">
					<h2>Email</h2>
				</div>
			</div>
			<div className="contact-plus-links--row">
				<div className="contact-plus-links--descripton">
					<h2>Resume / CV</h2>
				</div>
				<img src={resumeIconWhite} className="contact-plus-links--icon"></img>
			</div>
			<div className="contact-plus-links--row">
				<img src={linkedInWhite} className="contact-plus-links--icon"></img>
				<div className="contact-plus-links--descripton">
					<h2>LinkedIn Profile</h2>
				</div>
			</div>
			<div className="contact-plus-links--row">
				<div className="contact-plus-links--descripton">
					<h2>GitHub Profile</h2>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui nobis
						facere maxime nemo, cum possimus veritatis ratione dolor id adipisci!
						Perspiciatis consequatur nobis blanditiis doloribus placeat qui esse
						recusandae!
					</div>
				</div>
				<img src={gitHubIconWhite} className="contact-plus-links--icon"></img>
			</div>
		</div>
	);
}
