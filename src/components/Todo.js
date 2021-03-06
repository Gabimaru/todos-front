import React from "react";

const Todo = (props) => {
  const { todo, deleteTodo, toggleCompleteTodo } = props;
  const style = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
  };
  return (
    <div className="shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2">
      <span style={style}>{todo}</span>
      <div className="btn-group">
        {todo.done ? (
          <button
            className="btn btn-light btn-sm btn-dark mx-1"
            type="button"
            onClick={() => toggleCompleteTodo(todo)}
          >
            Rétablir
          </button>
        ) : (
          <button
            className="btn btn-light btn-sm mx-1"
            type="button"
            onClick={() => toggleCompleteTodo(todo)}
          >
            Terminer
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={() => deleteTodo(todo)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Todo;
