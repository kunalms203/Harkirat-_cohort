import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count}  setCount={setCount}/>
    </>
  );
}

export default App;

function Count({count,setCount}){
  return(
    <>
    {count}
    <Button count={count} setCount = {setCount} />
    </>
  )
}


function Button({ count, setCount }) {
  return (
    <>
      <br />
      <button onClick={()=>{
        setCount(prev=> prev+1)
      }}>Increase</button>
      <br />
      <button onClick={ ()=>{
        setCount(prev => prev-1)
      }}>decrese</button>
    </>
  );
}
