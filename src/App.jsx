import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


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
      <TaskList tasks={tasks} />

    </div>
  );
}

export default App;