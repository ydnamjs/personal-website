import React from "react";
import "../AboutMe.css";

export function Education() {
	return (
		<div className="panel shadow">
			<h2>2020-2024</h2>
			<span>Bachelor of Science in Computer Science at University of Delaware</span>
			<br />
			<span>Concentration of AI and Robotics</span>
			<p>Graduated With a Cumulative GPA of 3.8</p>
			<h2>Favorite Classes:</h2>
			<ul>
				<li>CISC 275: Introduction to Software Engineering</li>
				<li>CISC 372: Parallel Computing</li>
				<li>CISC 374: Educational Game Development</li>
				<li>CISC 437: Database Systems</li>
				<li>CISC 484: Machine Learning</li>
			</ul>
		</div>
	);
}
