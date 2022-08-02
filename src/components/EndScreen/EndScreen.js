function EndScreen(props) {
  const { guess, restartGame, attempts } = props;

  let finalPhrase = "";


  if (attempts >= 5) {
    finalPhrase = `${guess}! Это было легко!`;
  } else if (attempts < 3) {
    finalPhrase = `Фух! Наконец-то. ${guess}. Ещё чуть-чуть, и не угадал бы! ;-)`;
  } else {
    finalPhrase = `Твоё число ${guess}! Как я сразу не догадался!`;
  }
  return (
    <div className="game_end">
      <p>{finalPhrase}</p>
      <div className="buttons">
        <button onClick={restartGame}>Загадать ещё одно число</button>
      </div>
    </div>
  );
}

export default EndScreen;
