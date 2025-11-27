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

  const [filter, setFilter] = useState("all");  // "all", "completed", "pending"

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <Header />
        <div className="flasx jusity-center gap-4 mb-4">
          <button 
              className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
              className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button 
              className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setFilter("pending")}
          >
            Pending
          </button>
        </div>
        <AddTask onAdd={addTask} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>

  );
}

export default App;