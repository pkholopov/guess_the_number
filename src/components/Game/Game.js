import { useState } from "react";
import StartScreen from "../StartScreen/StartScreen";
import GameScreen from "../GameScreen/GameScreen";
import EndScreen from "../EndScreen/EndScreen";

import "./Game.css";

function Game() {
  const [screen, setScreen] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);
  const [guess, setGuess] = useState(Math.floor((end - start) / 2));
  const [attempts, setAttempts] = useState(Math.ceil(Math.log2(end)));

  function beginGame() {
    setGuess(start + Math.floor((end - start) / 2));
    setScreen(1);
  }

  function restartGame() {
    setScreen(0);
    setStart(0);
    setEnd(100);
    setAttempts(Math.ceil(Math.log2(100)));
  }

  function less() {
    setEnd(guess);
    setGuess(start + Math.floor((guess - start) / 2));
  }

  function more() {
    setStart(guess);
    setGuess(guess + Math.floor((end - guess) / 2));
  }

  return (
    <div className="game">
      {screen === 0 && (
        <StartScreen
          end={end}
          setEnd={setEnd}
          beginGame={beginGame}
          attempts={attempts}
          setAttempts={setAttempts}
        />
      )}
      {screen === 1 && (
        <GameScreen
          guess={guess}
          less={less}
          more={more}
          setScreen={setScreen}
          setAttempts={setAttempts}
          attempts={attempts}
        />
      )}
      {screen === 2 && (
        <EndScreen
          guess={guess}
          restartGame={restartGame}
          attempts={attempts}
        />
      )}
    </div>
  );
}

export default Game;
