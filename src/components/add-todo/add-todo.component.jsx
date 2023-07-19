/* eslint-disable react/prop-types */

import { useState } from "react";
import "./add-todo.styles.scss"

export default function AddTodo({ todos, setTodos }) {

    const [inputValue, setInputValue] = useState("");

    const handleAddInput = (event) => {
        setInputValue(event.target.value)
    };

    const addTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            todo: inputValue,
            done: false
        };

        inputValue
            ? setTodos([...todos, newTodo])
            : alert('Please fill in the blank');
        setInputValue("")
    };

    return (

        <form
            className="add-todo-component"
            onSubmit={addTodo}
        >
            <input
                type="text"
                name="add-todo-input"
                className="input add-todo-input"
                placeholder="I'm planning to do..."
                value={inputValue}
                onChange={handleAddInput}
            />
            <button
                className="add-todo-button"
            >
                Add Todo
            </button>
        </form>
    )
}
