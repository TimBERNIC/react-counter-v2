const CounterBox = ({ counterValue, setCounterTab, counterTab, id }) => {
  return (
    <div key={id}>
      <div className="counter-box">
        <div className="incdecr-box">
          {counterValue > 0 && (
            <button
              onClick={() => {
                const copyTab = [...counterTab];
                copyTab.find((element) => element.id === id).counterValue--;
                setCounterTab(copyTab);
              }}
              className="incdecr-button">
              -
            </button>
          )}
        </div>
        <div className="score-box">{counterValue}</div>
        <div className="incdecr-box">
          {counterValue < 10 && (
            <button
              onClick={() => {
                const copyTab = [...counterTab];
                copyTab.find((element) => element.id === id).counterValue++;
                setCounterTab(copyTab);
              }}
              className="incdecr-button">
              +
            </button>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          const copyTab = [...counterTab];
          copyTab.find((element) => element.id === id).counterValue = 0;
          setCounterTab(copyTab);
        }}
        className="reset-button">
        Reset
      </button>{" "}
    </div>
  );
};

export default CounterBox;
