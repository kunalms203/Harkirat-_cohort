import "./App.css";
import React,{ useState,memo } from "react";

function App() {
  // const [name1, setname1] = useState("kunal");
  // const handleClick = async () => {
  //   setname1(Math.random());
  //   console.log(name1);
  // };
  return (
    // <div style={{ margin: 10 }}>
    //   {/* <HeaderwithButton /> */}
    //   <button style={{ margin: 10 }} onClick={handleClick}>
    //     hii there change the name1
    //   </button>
    //   <br />
    //   <Header title={name1} />
    //   <Header title="Harkirat" />
    // </div>
    <>
      <Wrapper InsideComponent={Textcomponent}/>
    </>
  );
}
export default App;


function Wrapper({InsideComponent}){
    return(
      <div className="wrapper">
        <InsideComponent />
      </div>
    )
}


function Textcomponent(){
  return(
    <>
      <h1>hii my name is kunal</h1>
    </>
  )
}

// function HeaderwithButton() {
//   const [name1, setname1] = useState("kunal");
//   const handleClick = async () => {
//     setname1(Math.random());
//     console.log(name1);
//   };
//   return (
//     <>
//       <button style={{ margin: 10 }} onClick={handleClick}>
//         hii there change the name1
//       </button>
//       <br />
//       <Header title={name1} />
//     </>
//   );
// }

// const  Header = memo(({ title })=> {
//   return (
//     <>
//       <div style={{ margin: 10 }}>
//         <p>Hii my name is {title}</p>
//       </div>
//     </>
//   );
// });


