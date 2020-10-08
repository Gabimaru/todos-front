import React from "react";
import Todo from "./Todo";

const TodosList = (props) => {
  const { todos, deleteTodo, toggleCompleteTodo } = props;
  return todos.map((el) => {
    return (
      <Todo
        key={el.id}
        todo={el.task}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
    );
  });
};

export default TodosList;
