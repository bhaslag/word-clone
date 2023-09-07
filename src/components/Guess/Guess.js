import React from "react";

import { range } from "../../utils";
// Pick a random word on every pageload.

function Cell({ letter, status }) {
  const className = status
    ? `cell ${status}`
    : 'cell';
  return (
    <span className={className}>{letter}</span>
  );
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell 
          key={num}
          letter={value ? value.guessCheck[num].letter : undefined}
          status={value ? value.guessCheck[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
