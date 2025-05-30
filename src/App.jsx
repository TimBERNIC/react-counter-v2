import { useState } from "react";
import Footer from "./assets/components/Footer/Footer";
import CounterBox from "./assets/components/CounterBox";
import "./App.css";
import "./assets/components/Footer/Footer.css";
import { FaStopwatch } from "react-icons/fa";

const App = () => {
  // Tableau de counter

  const [counterTab, setCounterTab] = useState([]);
  return (
    <>
      <header>
        <div>
          <FaStopwatch /> React Counter V2
        </div>
      </header>
      <main>
        {counterTab.length < 3 && (
          <button
            onClick={() => {
              const counterTabCopy = [...counterTab];
              counterTabCopy.push({
                counterValue: 0,
                id: counterTab.length,
              });
              setCounterTab(counterTabCopy);
            }}
            className="add-button">
            Add Counter
          </button>
        )}
        <div className="counter-reset-box">
          {counterTab.map((element) => {
            return (
              <CounterBox
                counterValue={element.counterValue}
                setCounterTab={setCounterTab}
                counterTab={counterTab}
                id={element.id}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
