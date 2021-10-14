import React from 'react'
import Todo from './Todo'

/**
 * This component is used to display all of the to-dos by the user
 */
export default function TodoList({getFilter, getTodos, setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">{
                getTodos.filter((item) => {
                    switch (getFilter) {
                        case "completed":
                            return item.completed;
                        case "uncompleted":
                            return !item.completed;
                        default:
                            return true
                    }
                }).map(todo => (
                    <Todo key={todo.id} getTodo={todo} getTodos={getTodos} setTodos={setTodos} text={todo.text}/>
                ))
            }</ul>
        </div>
    )
}