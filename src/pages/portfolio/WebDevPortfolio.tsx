import React from "react";
import {PortfolioItem} from "./pieces/PortfolioItem";

export function WebDevPortfolio() {
	return (
		<>
			<PortfolioItem
				title="D6 Counter Web Showcase"
				description={
					<>
						<p>
							A full stack web application for showcasing my six sided dice counter.
							Front End built with React.js and Typescript. Backend built with python
							and deployed on AWS.
						</p>
					</>
				}
				techUsed={[
					"Amazon Web Services (AWS)",
					"Docker",
					"API Development",
					"FastAPI",
					"Python",
					"React",
					"Typescript",
					"HTML",
					"CSS",
					"Git",
					"GitHub",
					"Node Package Manager",
					"ESLint",
					"Husky",
				]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"d6-counter-link-1"}
						href="https://ydnamjs.github.io/d6-counter-frontend/"
						target="_blank"
						rel="noreferrer"
					>
						Live
						<br />
						Deployment
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"d6-counter-link-2"}
						href="https://github.com/ydnamjs/d6-counter-backend-lambda"
						target="_blank"
						rel="noreferrer"
					>
						Back End
						<br />
						Source Code
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"d6-counter-link-3"}
						href="https://github.com/ydnamjs/d6-counter-frontend"
						target="_blank"
						rel="noreferrer"
					>
						Front End
						<br />
						Source Code
					</a>,
				]}
				isAnimationLeft={true}
			/>
			<PortfolioItem
				title="Personal Website"
				description={
					<>
						<p>
							A website that showcases who I am, what I&apos;ve done and how to reach
							me along with whatever else I feel like sharing.
						</p>
						<p>Fun fact: You&apos;re here now!</p>
					</>
				}
				techUsed={[
					"React",
					"Typescript",
					"HTML",
					"CSS",
					"Git",
					"GitHub",
					"Node Package Manager",
					"ESLint",
					"Husky",
				]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"personal-website-link-1"}
						href="https://github.com/ydnamjs/personal-website"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>,
				]}
				isAnimationLeft={false}
			/>
			<PortfolioItem
				title={"Sound-ificator-inator"}
				description={
					<>
						<p>
							A web app that simulates a 3D sound enviornment that reacts to rotations
							in real time using gyro orientations recieved from a raspberry pi.
							Intended to reduce overstimulation in noisy environments for
							neurodivergent people.
						</p>
						<p>
							Created for and awarded 1st place in the 2024 Hen Hacks Hackathon Best
							Accessibilty Hack Category.
						</p>
					</>
				}
				techUsed={[
					"JavaScript",
					"three.js",
					"HTML",
					"CSS",
					"Git",
					"GitHub",
					"Node Package Manager",
					"Raspberry Pi",
					"API",
				]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"sound-ificator-inator-link-1"}
						href="https://devpost.com/software/sound-ificator-inator"
						target="_blank"
						rel="noreferrer"
					>
						Dev Post
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"sound-ificator-inator-link-2"}
						href="https://www.youtube.com/watch?v=qyBQygNTVF8"
						target="_blank"
						rel="noreferrer"
					>
						Video Demo
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"sound-ificator-inator-link-3"}
						href="https://github.com/henhackz/henhacks.github.io"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>,
				]}
				isAnimationLeft={true}
			/>
			<PortfolioItem
				title={"Corkboard Website"}
				description={
					<p>
						Basic &quot;drag and drop&quot; web application that can used to create note
						cards on a virtual corkboard.
					</p>
				}
				techUsed={[
					"React",
					"Typescript",
					"HTML",
					"CSS",
					"Git",
					"GitHub",
					"Node Package Manager",
					"React DnD",
				]}
				linkButtons={[
					<a
						className="panel portfolio-item--links-item"
						key={"cork-board-link-1"}
						href="https://bkbranson.github.io/team-2-final-project/"
						target="_blank"
						rel="noreferrer"
					>
						Live Deployment
					</a>,
					<a
						className="panel portfolio-item--links-item"
						key={"cork-board-link-2"}
						href="https://github.com/bkbranson/team-2-final-project"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>,
				]}
				isAnimationLeft={false}
			/>
		</>
	);
}
