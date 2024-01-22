import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const sortedTodos = [...todos].sort((a, b) => {
    const urgencyOrder = { low: 0, medium: 1, high: 2 };
    return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
  });

  return (
    <div className="bg-gray-900 mx-auto p-3 rounded-[10px] w-[70vw] max-w-[660px] h-[58vh] center overflow-auto">
      <ul className="list">
        {sortedTodos.length === 0 && "No Tasks to be Done Right Now"}
        {sortedTodos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            urgency={todo.urgency}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;