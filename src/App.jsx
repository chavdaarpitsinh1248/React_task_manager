import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      <AddTask onAdd={addTask} />

      <h3>Your Tasks:</h3>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

export default App;