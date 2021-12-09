import React from "react";
import "./tiles.css";

const Tiles = (props) => {
  return <button className="tile-container">{props.item}</button>;
};

export default Tiles;
