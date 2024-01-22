import React, { useState } from "react";

const TodoForm = ({ submitTodo }) => {
  const [newItem, setNewItem] = useState("");
  const [urgency, setUrgency] = useState("medium");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    submitTodo(newItem, urgency);
    setNewItem("");
    setUrgency("medium");
  }

  return (
    <form onSubmit={handleSubmit} className="todolist-form">
      <div className="flow-root bg-gray-900 mx-auto p-3 rounded-[10px] w-[70vw] max-w-[660px] center">
        <label htmlFor="item" className="float-left text-gray-100">
          Add To-Do
        </label>
        <div className="float-right">
          <input
            className="rounded bg-gray-700 w-[25vw] max-w-[250px] h-[30px] px-2 text-gray-100"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Do the laundry..."
            type="text"
            id="item"
          />
          <select
            className="font-light ml-[10px] bg-gray-700 text-gray-100 h-[30px] w-[18vw] max-w-[180px] rounded"
            id="urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button className="font-semibold ml-[10px] bg-slate-100 text-black px-[10px] h-[30px] rounded">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
