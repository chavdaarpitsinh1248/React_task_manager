import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;