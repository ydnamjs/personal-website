import React from "react";
import "./OtherInterests.css";
import {ImageCarousel} from "./ImageCarousel";
import {AlbumCard} from "./AlbumCard";
import {GameCard} from "./GameCard";

import albumCargo from "../../assets/other-interests/favorite-albums/Cargo.jpg";
import albumNothingHappens from "../../assets/other-interests/favorite-albums/NothingHappens.jpg";
import albumOnlyALad from "../../assets/other-interests/favorite-albums/OnlyALad.jpg";
import albumOpenYourEyes from "../../assets/other-interests/favorite-albums/OpenYourEyes.jpg";
import albumRandomAccessMemories from "../../assets/other-interests/favorite-albums/RandomAccessMemories.jpg";
import albumRemainInLight from "../../assets/other-interests/favorite-albums/RemainInLight.jpg";

const ALBUM_CARDS = [
	<AlbumCard src={albumCargo} title={"Cargo"} band={"Men At Work"} key={"album-card-1"} />,
	<AlbumCard
		src={albumNothingHappens}
		title={"Nothing Happens"}
		band={"Wallows"}
		key={"album-card-2"}
	/>,
	<AlbumCard
		src={albumOnlyALad}
		title={"Only A Lad"}
		band={"Oingo Boingo"}
		key={"album-card-3"}
	/>,
	<AlbumCard
		src={albumOpenYourEyes}
		title={"Open Your Eyes"}
		band={"Goldfinger"}
		key={"album-card-4"}
	/>,
	<AlbumCard
		src={albumRandomAccessMemories}
		title={"Random Access Memories"}
		band={"Daft Punk"}
		key={"album-card-5"}
	/>,
	<AlbumCard
		src={albumRemainInLight}
		title={"Remain In Light"}
		band={"Talking Heads"}
		key={"album-card-6"}
	/>,
];

import gameTeamFortress2 from "../../assets/other-interests/favorite-games/TeamFortress2.jpg";
import gameTerraria from "../../assets/other-interests/favorite-games/Terraria.jpg";
import gameFuri from "../../assets/other-interests/favorite-games/Furi.jpg";
import gamePayday2 from "../../assets/other-interests/favorite-games/PayDay2.jpg";
import gameZombies from "../../assets/other-interests/favorite-games/Zombies.jpg";
import gameBloons from "../../assets/other-interests/favorite-games/Bloons.jpg";

const GAME_CARDS = [
	<GameCard src={gameTeamFortress2} title={"Team Fortress 2"} key={"game-card-1"}></GameCard>,
	<GameCard src={gameTerraria} title={"Terraria"} key={"game-card-2"}></GameCard>,
	<GameCard src={gameFuri} title={"Furi"} key={"game-card-3"}></GameCard>,
	<GameCard src={gamePayday2} title={"PAYDAY 2"} key={"game-card-4"}></GameCard>,
	<GameCard src={gameZombies} title={"Call Of Duty Zombies"} key={"game-card-5"}></GameCard>,
	<GameCard src={gameBloons} title={"Bloons TD 6"} key={"game-card-6"}></GameCard>,
];

export function OtherInterests() {
	return (
		<div className="other-interests-page">
			<ImageCarousel headingText="Favorite Albums" items={ALBUM_CARDS}></ImageCarousel>
			<ImageCarousel headingText="Favorite Video Games" items={GAME_CARDS}></ImageCarousel>
		</div>
	);
}
