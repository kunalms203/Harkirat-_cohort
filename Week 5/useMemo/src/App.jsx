import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [counter, setcounter] = useState(0);
  let count = useMemo(() => {
    console.log("Memo called")
    let count = 0;
    for (let i = 1; i <= input; i++) {
      count = count + i;
    }
    return count;
  }, [input]);

  return (
    <>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="number"
        placeholder="Enter a umber here"
      />
      <br />
      Addition of no is {count}
      <br />
      <button
        onClick={() => {
          setcounter(counter + 1);
        }}
      >{`Counter${counter}`}</button>
    </>
  );
}

export default App;
