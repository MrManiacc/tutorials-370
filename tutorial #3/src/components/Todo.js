import React from 'react'

/**
 * This component is used to display all of the to-dos by the user
 */
export default function Todo({text, getTodo, getTodos, setTodos}) {
    const deleteHandler = () => {
        setTodos(getTodos.filter(el => el.id !== getTodo.id))
    }
    const completeHandler = () => {
        setTodos(getTodos.map(item => {
                if (item.id === getTodo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${getTodo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>

    )
}