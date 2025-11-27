import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() === "") return;
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg mb-2 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4"
        />

        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-2 rounded hover:bg-green-600"
            >
              Save
            </button>
          </form>
        ) : (
          <span
            className={`${
              task.completed
                ? "line-through text-gray-500 dark:text-gray-400"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

      {!isEditing && (
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
