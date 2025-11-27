function TaskItem({ task }) {
    return (
        <li>
            <span>{task.text}</span>
        </li>
    );
}

export default TaskItem;