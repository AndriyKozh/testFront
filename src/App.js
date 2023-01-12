import { useState } from "react";
import "./App.css";
import InputTodu from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import ContactsList from "./components/ContactsList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <InputTodu text={text} setText={setText} addTodo={addTodo} />
      <ListTodo todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <ContactsList />
    </div>
  );
}

export default App;
