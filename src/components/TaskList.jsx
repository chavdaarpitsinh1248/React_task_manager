import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500">No tasks yet.</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id} 
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                 />
            ))}
        </ul>
    );
}

export default TaskList;