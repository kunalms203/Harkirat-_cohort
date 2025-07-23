import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [first, setFirst] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      setFirst(data);
      console.log(data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in both Title and Description fields.");
      return;
    }

    const todo = { title, description };

    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      const data = await res.json();
      console.log("Todo added:", data);
      fetchData();

      settitle("");
      setdescription("");
    } catch (e) {
      console.log("There has been a problem adding a todo", e);
    }
  };
  
  return (
    <>
      <RenderTodo item={first}/>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Todo Name"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add todo</button>
      </form>
      
    </>
  );
}

const RenderTodo = ({ item }) => {
  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {item.map((item) => (
          <li key={item._id}>
            <strong>{item.title}</strong>: {item.description} :{" "}
            {item.isCompleted ? "nice" : "please do it quickly"}
          </li>
        ))}
      </ul>
    </>
  );
};

// ✅ Proper export
export default App;
