const CounterBox = (
  { counter, functionAddOnClick, functionRemoveOnClick },
  index
) => {
  return (
    <div key={index}>
      <button onClick={functionAddOnClick}>+</button>
      <div>{counter}</div>
      <button onClick={functionRemoveOnClick}>-</button>
    </div>
  );
};

export default CounterBox;
