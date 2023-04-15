import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TODOITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
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
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
      <TodoList
        list={todos.filter((todo) => todo.completed === false)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter="all"
      />
      <h1 className="header">ToDo's done</h1>
      <TodoList
        list={todos.filter((todo) => todo.completed)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter="done"
      />
    </>
  );
}

export default Todo;
