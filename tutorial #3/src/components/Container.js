import '../index.css';
import {React, useState} from 'react'
import Form from "./Form";
import TodoList from "./TodoList";

/**
 * This is the main form component that wraps around all of the other components.
 */
export default function Container() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("");

    return (
        <div className="App">
            <header><h1>To-do List</h1></header>
            <Form setFilter={setFilter} getTodos={todos} setTodos={setTodos} getInputText={inputText}
                  setInputText={setInputText}/>
            <TodoList getFilter={filter} setTodos={setTodos} getTodos={todos}/>
        </div>
    )
}
