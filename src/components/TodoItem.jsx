import React from "react";

const TodoItem = ({
  id,
  title,
  completed,
  urgency,
  toggleTodo,
  deleteTodo,
}) => {
  const urgencyColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  const urgencyColor = urgencyColors[urgency] || "bg-blue-500"

  return (
    <li
      className={`flow-root ${urgencyColor} text-black mx-auto mb-3 p-2 rounded-[10px] w-[65vw] max-w-[640px]`}
    >
      <label className="float-left">
        <input
          className="mr-[5px]"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        | {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="float-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
