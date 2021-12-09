import { useEffect, useState } from "react";
import "./App.css";
import MatrixBoard from "./Components/MatrixBoard";

function App() {
  const [row] = useState(8);
  const [column] = useState(8);
  const [matrix, setMatrix] = useState(() => {
    let tempMatrix = [];
    for (let i = 0; i < column; i++) {
      tempMatrix.push([0, 0, 0, 0, 0, 0, 0, 0]);
    }
    return tempMatrix;
  });

  const handleMatrixMines = () => {
    let tempMatrix = matrix;
    for (let ii = 0; ii < 10; ii++) {
      let i = Math.floor(Math.random() * 8);
      let j = Math.floor(Math.random() * 8);
      if (tempMatrix[i][j] === "💣") {
        ii--;
        continue;
      }
      tempMatrix[i][j] = "💣";
    }
    setMatrix([...tempMatrix]);
  };

  const handleAdjacentMineNumber = () => {
    let tempMatrix = matrix;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        let adjacentMineCount = 0;
        if (tempMatrix[i][j] === "💣") continue;

        if (i - 1 >= 0 && j - 1 >= 0 && tempMatrix[i - 1][j - 1] === "💣")
          adjacentMineCount++;
        if (i - 1 >= 0 && tempMatrix[i - 1][j] === "💣") adjacentMineCount++;
        if (i - 1 >= 0 && j + 1 < column && tempMatrix[i - 1][j + 1] === "💣")
          adjacentMineCount++;
        if (j - 1 >= 0 && tempMatrix[i][j - 1] === "💣") adjacentMineCount++;
        if (i >= 0 && j + 1 < column && tempMatrix[i][j + 1] === "💣")
          adjacentMineCount++;
        if (i + 1 < row && j - 1 >= 0 && tempMatrix[i + 1][j - 1] === "💣")
          adjacentMineCount++;
        if (i + 1 < row && tempMatrix[i + 1][j] === "💣") adjacentMineCount++;
        if (i + 1 < row && j + 1 < column && tempMatrix[i + 1][j + 1] === "💣")
          adjacentMineCount++;

        tempMatrix[i][j] = adjacentMineCount;
      }
    }
    setMatrix([...tempMatrix]);
  };

  useEffect(() => {
    handleMatrixMines();
    handleAdjacentMineNumber();
  }, []);

  return (
    <div className="App">
      <MatrixBoard matrix={matrix} />
    </div>
  );
}

export default App;
