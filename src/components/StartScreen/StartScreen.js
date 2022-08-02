import "./StartScreen.css";

function StartScreen(props) {
  const { end, setEnd, beginGame, attempts, setAttempts } = props;
  return (
    <div className="game_start">
      <p>
        Загадай число от 1 до
        <div className="end_input">
          <input
            type="number"
            name="end"
            value={end}
            min="100"
            max="1000000000"
            onChange={(e) => {
              setEnd(e.target.value);
              setAttempts(Math.ceil(Math.log2(e.target.value)));
            }}
          ></input>
        </div>
      </p>
      <p className="guess_count">
        Мне потребуется максимум {attempts} попыток, чтобы его угадать!
      </p>
      <div className="buttons">
        <button onClick={beginGame}>Готово!</button>
      </div>
    </div>
  );
}

export default StartScreen;
