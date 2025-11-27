import { useState } from "react";

function AddTask({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        onAdd(text);   // send text to parent
        setText("");   // clear input
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="Enter a task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}   // controlled input
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTask;