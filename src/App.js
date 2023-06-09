import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue.trim() }]);
      setInputValue("");
    }
  };

  const handleEditTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { text: newText };
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="input-container">
        <input
          data-testid="add-todo"
          type="text"
          placeholder="Add a todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button data-testid="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            <input
              data-testid="edit-todo"
              type="text"
              value={todo.text}
              onChange={(e) => handleEditTodo(index, e.target.value)}
            />
            <button
              data-testid="delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
