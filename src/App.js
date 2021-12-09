import { useEffect, useState } from "react";
import "./App.css";
import MatrixBoard from "./Components/MatrixBoard";

function App() {
  const [matrix, setMatrix] = useState(() => {
    let tempMatrix = [];
    for (let i = 0; i < 8; i++) {
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

  useEffect(() => {
    handleMatrixMines();
  }, []);

  return (
    <div className="App">
      <MatrixBoard matrix={matrix} />
    </div>
  );
}

export default App;
