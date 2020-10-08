import React, { useState } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

/* const initialTodos = [
  {
    text: "Faires des courses",
    isCompleted: true,
    id: "1b688c51-e990-4ce3-95a5-9018cf81d23d",
  },
  {
    text: "Réviser ES6 classes",
    isCompleted: false,
    id: "efc6331d-7ca2-49a6-b014-378b8280b33d",
  },
  {
    text: "Aroser les plantes",
    isCompleted: false,
    id: "9e60d353-cd72-40bb-97e6-5841e51635c0",
  },
];
 */

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  React.useEffect(() => {
    fetch("http://192.168.1.100:7777/todos")
      /*
      Dans le serveur, créer une route qui affiche les todos :
      (elle sera récupérée ici et les todos de la database devraient s'afficher sur le rendu)
      app.get('/todos', async (req, res) => {
      try {
      const todos = await Todos.findAll({ attributes: ['task'] })
      res.json({ code: 200, data: todos })
      } catch (e) {
      res.status(500).json({ code: 500, data: 'Pierre test erreur' })
      }
      })
      */
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
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el.id !== task.id));
  };

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        if (el.id === task.id) {
          el.isCompleted = !el.isCompleted;
        }
        return el;
      })
    );
  };

  const filteredTodos = todos.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted;
    }
    if (filter === "notcompleted") {
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
