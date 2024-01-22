import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() =>{
    const localSave = localStorage.getItem("items")
    if(localSave == null) return []
    return JSON.parse(localSave)
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, urgency) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false, urgency },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div className="absolute rounded-[15px] w-[75vw] max-w-[720px] h-[768px] py-[50px] dark:bg-cyan-500 blur"></div>
      <div className="relative font-poppins rounded-[15px] w-[75vw] max-w-[720px] h-[768px] py-[25px] dark:bg-gray-800 dark:text-gray-100">
        <TodoForm submitTodo={addTodo} />
        <h1 className="text-left font-extrabold my-[30px] ml-[2rem] text-[2rem]">To-do List :</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
