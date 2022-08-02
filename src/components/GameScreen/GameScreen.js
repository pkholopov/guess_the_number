import "./GameScreen.css";

function GameScreen(props) {
  const { guess, less, more, setScreen, setAttempts, attempts } = props;
  return (
    <div className="game_main">
      <p>Ты загадал число {guess}!</p>
      <p className="attempts_left"> У меня осталось {attempts - 1} попыток</p>
      <div className="buttons">
        <button
          onClick={() => {
            less();
            setAttempts(attempts - 1);
          }}
        >
          Нет, моё число меньше
        </button>
        <button
          onClick={() => {
            more();
            setAttempts(attempts - 1);
          }}
        >
          Нет, моё число больше
        </button>
        <button onClick={() => setScreen(2)}>Верно!</button>
      </div>
    </div>
  );
}

export default GameScreen;
