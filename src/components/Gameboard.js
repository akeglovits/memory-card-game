import { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Gameboard.css";

const Gameboard = () => {
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [board, setBoard] = useState([]);

  const boardValues = [
    "alligator",
    "bear",
    "bird",
    "bull",
    "cat",
    "caterpillar",
    "chicken",
    "coyote",
    "dog",
    "duck",
    "goat",
    "hippo",
    "kangaroo",
    "koala",
    "lion",
    "owl",
    "panther",
    "pelican",
    "pigeon",
    "rat",
    "snake",
  ];

  useEffect(() => {
    generateNewBoard();
  }, []);

  const generateNewBoard = () => {
    let valuesTemp = boardValues;
    let boardTemp = [];

    for (let i = 0; i < 12; i++) {
      const randomNum = Math.floor(Math.random() * valuesTemp.length);
      console.log(randomNum);
      boardTemp.push(valuesTemp[randomNum]);
      console.log(boardTemp);
      valuesTemp = valuesTemp.filter((val, i) => {
        return i !== randomNum;
      });
    }

    setBoard(boardTemp);
  };

  const handleClick = (cardVal) => {
    if (clicked.includes(cardVal)) {
      if (count > best) {
        setBest(count);
      }

      setCount(0);
      setClicked([]);
    } else {
      setCount(count + 1);
      setClicked(clicked.concat(cardVal));
    }

    generateNewBoard();
  };
  return (
    <div className="GameBoard">
      <div className="Scoreboard">
        <div className="currentScore">Score: {count}</div>
        <div className="bestScore">Best: {best}</div>
      </div>
      <div className="CardArea">
        {board.map((val, i) => {
          return <Card key={i} handleClick={handleClick} val={val} />;
        })}
      </div>
    </div>
  );
};

export default Gameboard;
