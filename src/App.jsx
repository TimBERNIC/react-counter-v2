import { useState } from "react";
import Footer from "./assets/components/Footer/Footer";
import CounterBox from "./assets/components/CounterBox";
import "./App.css";
import "./assets/components/Footer/Footer.css";
import { FaStopwatch } from "react-icons/fa";

const App = () => {
  // Tableau de counter
  const [counterTab, setCounterTab] = useState([]);

  // Un counter
  const counter = {
    counter: Number,
    id: Number,
  };

  const removeOnclick = () => {
    setCounter(counter - 1);
  };

  const AddOnClick = () => {
    setCounter(counter + 1);
  };

  console.log(console.log(copyTab));

  return (
    <>
      <header>
        <div>
          <FaStopwatch /> React Counter V2
        </div>
      </header>
      <main>
        <button
        // onClick={() => {
        // counterTab.push(
        //   "tata"
        //   // <CounterBox counter={counter} setCounter={setCounter} />
        // );
        // }}
        >
          Add Counter
        </button>
        <div>
          {counterTab.map((element) => {
            return <div>{element}</div>;
          })}
        </div>
        <button
          onClick={() => {
            counterTab.push(counter);
          }}>
          Reset
        </button>
      </main>
      <Footer />
    </>
  );
};

export default App;
