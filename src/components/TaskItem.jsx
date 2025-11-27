function TaskItem({ task, onToggle, onDelete }) {
    return (
            <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg mb-2 transition-colors duration-300">
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
      className="w-4 h-4"
    />
    <span
      className={`${
        task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200"
      }`}
    >
      {task.text}
    </span>
  </div>
  <button
    onClick={() => onDelete(task.id)}
    className="text-red-500 hover:text-red-700"
  >
    Delete
  </button>
</li>

    );
}

export default TaskItem;