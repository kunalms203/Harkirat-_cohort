import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./componenets/Dashboard";
import { Landing } from "./componenets/Landing";
import { Navbar } from "./componenets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 mt-2" onClick={()=>{
        window.location.href = "/"
      }}>
        Home
      </button>
      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 ml-2 mt-2" onClick={()=>{
        window.location.href = "/dashboard"
      }}>
        Dashboard
      </button>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
    </>
  );
}

export default App;
