import React from 'react'

/**
 * This is the main form component that is used for input from the user
 */
export default function Form({setFilter, setInputText, setTodos, getInputText, getTodos}) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    }
    const onSubmitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...getTodos,
            {text: getInputText, completed: false, id: parseInt((10000 * Math.random()), 10)}
        ])

        setInputText("")
    }
    const filterChangeHandler = (e) => {
        setFilter(e.target.value)
    }
    return (<form onSubmit={onSubmitTodoHandler}>
        <input value={getInputText} onChange={inputTextHandler} type="text" className="todo-input"/>
        <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"/>
        </button>
        <div className="select">
            <select onChange={filterChangeHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>)
}
