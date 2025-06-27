import { useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // Check if either input is empty
    if (!title || !description) {
      alert("Please fill in both Title and Description fields.");
      return;
    }

    const todo = {
      title,
      description,
    };

    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      const data = await res.json();
      console.log("Todo added:", data);

      // Clear inputs
      settitle("");
      setdescription("");
    } catch (e) {
      console.log("There has been a problem adding a todo", e);
    }
  };

  return (
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
  );
}

export default App;
