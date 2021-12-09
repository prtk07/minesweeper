import React from "react";
import Tiles from "./Tiles";
import "./matrix-board.css";

const MatrixBoard = (props) => {
  return (
    <div className="matrix-container">
      {props.matrix.map((item, i) => {
        return item.map((iitem, j) => {
          return <Tiles item={iitem} />;
        });
      })}
    </div>
  );
};
export default MatrixBoard;
