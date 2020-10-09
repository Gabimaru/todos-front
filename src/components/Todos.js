import React, { useState } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  React.useEffect(() => {
    fetch("http://192.168.1.100:7777/todos")
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("fail");
      })
      .then((result) => {
        console.log("result", result.data);
        setTodos(result.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const addTodo = (text) => {
    fetch("http://192.168.1.100:7777/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: text,
      }),
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const deleteTodo = (text) => {
    fetch(`http://192.168.1.100:7777/delete/${text}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const toggleCompleteTodo = (text) => {
    fetch(`http://192.168.1.100:7777/complete/${text}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const filteredTodos = todos.filter((el) => {
    if (el.done === "true") {
      return el.isCompleted;
    }
    if (el.done === "false") {
      return !el.isCompleted;
    }
    return true;
  });

  const completedCount = todos.filter((el) => el.isCompleted).length;
  return (
    <main>
      <h2 className="text-center my-4">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
      <AddTodoForm addTodo={addTodo} setFilter={setFilter} />
    </main>
  );
};

export default Todos;
