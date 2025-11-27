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
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Add
            </button>
        </form>

    );
}

export default AddTask;