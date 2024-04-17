import React from "react";
import "../AboutMe.css";

import teamFortress2 from "../../assets/games/TeamFortress2.jpg";
import payDay2 from "../../assets/games/PayDay2.jpg";
import furi from "../../assets/games/Furi.jpg";
import zombies from "../../assets/games/Zombies.jpg";
import bloons from "../../assets/games/Bloons.jpg";

import cargo from "../../assets/music/Cargo.jpg";
import nothingHappens from "../../assets/music/NothingHappens.jpg";
import onlyALad from "../../assets/music/OnlyALad.jpg";
import openYourEyes from "../../assets/music/OpenYourEyes.jpg";
import randomAccessMemories from "../../assets/music/RandomAccessMemories.jpg";
import remainInLight from "../../assets/music/RemainInLight.jpg";

export function OtherInterests() {
	return (
		<div className="panel shadow">
			<h2>Video Games</h2>
			<p>My Favorite game is Team Fortress 2</p>
			<p>I used to play Team Fortress 2 competitively in both 6v6 and 9v9 formats.</p>
			<img src={teamFortress2} className="lone-image" alt="Team Fortress 2 banner" />
			<p>
				Other games I really like include the early Call of Duty Zombies modes, PAYDAY 2,
				Furi, and recently Bloons TD 6.
			</p>
			<div className="image-row">
				<img src={payDay2} alt="Pay Day 2 banner" />
				<img src={furi} alt="Furi banner" />
				<img src={zombies} alt="Black Ops 3 screenshot" />
				<img src={bloons} alt="BTD6 Banner" />
			</div>
			<h2>Music</h2>
			<p>Below are some of my favorite albums</p>
			<div className="image-row">
				<img src={cargo} alt="cargo album cover" />
				<img src={nothingHappens} alt="nothing happens album cover" />
				<img src={onlyALad} alt="only a lad album cover" />
				<img src={openYourEyes} alt="open your eyes album cover" />
				<img src={randomAccessMemories} alt="random access memories album cover" />
				<img src={remainInLight} alt="remain in light album cover" />
			</div>
		</div>
	);
}
