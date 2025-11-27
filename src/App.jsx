import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


function App() {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };
  
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <Header />
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>

  );
}

export default App;