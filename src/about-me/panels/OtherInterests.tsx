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
import {SquareImgCard} from "../SquareImgCard";

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
				<SquareImgCard image={payDay2} title={"Payday 2"}></SquareImgCard>
				<SquareImgCard image={furi} title={"Furi"}></SquareImgCard>
				<SquareImgCard image={zombies} title={"COD: Zombies"}></SquareImgCard>
				<SquareImgCard image={bloons} title={"Bloons TD6"}></SquareImgCard>
			</div>
			<h2>Music</h2>
			<p>Below are some of my favorite albums</p>
			<div className="image-row">
				<SquareImgCard image={cargo} title={'"Cargo" By Men At Work'}></SquareImgCard>
				<SquareImgCard
					image={nothingHappens}
					title={'"Nothing Happens" by Wallows'}
				></SquareImgCard>
				<SquareImgCard
					image={onlyALad}
					title={'"Only A Lad" by Oingo Boingo'}
				></SquareImgCard>
				<SquareImgCard
					image={openYourEyes}
					title={'"Open Your Eyes" by Goldfinger'}
				></SquareImgCard>
				<SquareImgCard
					image={randomAccessMemories}
					title={'"Random Access Memories" by Daft Punk'}
				></SquareImgCard>
				<SquareImgCard
					image={remainInLight}
					title={'"Remain In Light" by Talking Heads'}
				></SquareImgCard>
			</div>
		</div>
	);
}
