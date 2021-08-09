import React from "react";
import useFlip from "./hooks.js";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const flip = useFlip();
  return (
    <img
      src={flip[0] ? front : back}
      alt="playing card"
      onClick={flip[1]}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;