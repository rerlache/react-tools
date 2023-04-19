import TodoItem from "./TodoItem";
import Style from '../todo.module.css'

function TodoList({ list, toggleTodo, deleteTodo, filter }) {
  return (
    <ul className={`${Style['list']}`}>
      {list.length === 0 && filter === "all"
        ? "Nothing Todo!"
        : filter === "done"
        ? list.length === 0 && "Nothing done yet"
        : null}
      {list.map((todo) => {
        return (
          <>
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </>
        );
      })}
    </ul>
  );
}

export default TodoList;
