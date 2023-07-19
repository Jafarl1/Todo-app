/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./todo-item.styles.scss"

export default function TodoItem({ todo, i, editTodo, deleteTodo }) {

  const [done, setDone] = useState(false)

  const handleDone = () => {
    done ? setDone(false) : setDone(true);
  }

  return (
    <div className="todo-item">
      <div className="item-info">
        <span>
          {i}.
        </span>
        <p className={done ? "checked" : ""}>
          {todo.todo}
        </p>
      </div>
      <div className="buttons-group">
        <button onClick={handleDone}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}
