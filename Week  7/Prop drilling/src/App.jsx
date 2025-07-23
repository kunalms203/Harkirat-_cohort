import { useState, useContext } from "react";
import "./App.css";
import { CountContext } from "./context.jsx";
import { RecoilRoot, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../Store/Atoms/Count.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* This logic is for the Context api */}
      {/* <CountContext.Provider value={{ count, setCount }}> */}
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      {/* This logic is for the Context api */}
      {/* </CountContext.Provider> */}
    </div>
  );
}

export default App;

function Count() {
  // This logic is for the Context api
  // const {count} = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  return (

    <>
    <div>
      {(isEven) ? "No is odd" : "no is even"}
    </div>
      
      {count}
      <Button />
    </>
  );
}

function Button() {
  // This logic is for the Context api
  // const { setCount } = useContext(CountContext);
  const setCount = useSetRecoilState(countAtom);
  
  return (
    <>
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        decrese
      </button>
    </>
  );
}
