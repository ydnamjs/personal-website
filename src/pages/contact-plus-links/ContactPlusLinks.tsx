import React from "react";
import "./ContactPlusLinks.css";

import toast, {Toaster} from "react-hot-toast";

import emailIconWhite from "../../assets/contact-plus-links/Email_Icon_White.png";
import resumeIconWhite from "../../assets/contact-plus-links/Resume_Icon_White.png";
import linkedInWhite from "../../assets/contact-plus-links/LinkedIn_Icon_White.png";
import gitHubIconWhite from "../../assets/contact-plus-links/GitHub_Icon_White.png";

export function ContactPlusLinks() {
	return (
		<div className="contact-plus-links-page">
			<div className="contact-plus-links--row">
				<div>
					<a
						className="contact-plus-links--section"
						style={{height: "190px"}}
						href="mailto:hireMichaelSnead@gmail.com"
					>
						<img src={emailIconWhite} className="contact-plus-links--icon"></img>
						<h2 style={{margin: "5px"}}>Business Email</h2>
						<br />
						<span style={{textAlign: "center"}}>hireMichaelSnead@gmail.com</span>
						<br />
					</a>
					<button
						className="copy-email-button"
						onClick={() => {
							navigator.clipboard.writeText("hireMichaelSnead@gmail.com");
							toast("Email Address Copied to Clipboard", {
								duration: 2000,
								id: "email address copy",
								style: {
									borderRadius: "10px",
									background: "#333",
									color: "#fff",
								},
							});
						}}
					>
						Copy Email Address
					</button>
					<Toaster position="bottom-center" reverseOrder={false} />
				</div>
				<a
					href="https://drive.google.com/file/d/1wlqSZAsHSnRj8TFKZZoO0wAmbaV-I8mI/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="contact-plus-links--section"
				>
					<img src={resumeIconWhite} className="contact-plus-links--icon"></img>
					<h2>Resume / CV</h2>
				</a>
			</div>
			<div className="contact-plus-links--row">
				<a
					href="https://www.linkedin.com/in/michael-snead/"
					target="_blank"
					rel="noreferrer"
					className="contact-plus-links--section"
				>
					<img src={linkedInWhite} className="contact-plus-links--icon"></img>
					<h2>LinkedIn Profile</h2>
				</a>
				<a
					href="https://www.github.com/ydnamjs"
					target="_blank"
					rel="noreferrer"
					className="contact-plus-links--section"
				>
					<img src={gitHubIconWhite} className="contact-plus-links--icon"></img>
					<h2>GitHub Profile</h2>
				</a>
			</div>
		</div>
	);
}
