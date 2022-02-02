import React, { useState } from 'react';
import './App.css'; 
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);

  return (
    <div className="App">
      <header>
      <h1>TODO LIST</h1>
      </header>
      <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/> 
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
