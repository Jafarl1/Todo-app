/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./todo-list.styles.scss"
import TodoItem from "../todo-item/todo-item.component"

export default function TodoList({ todos }) {
  return (
    <>
      {
        todos.map((todo, i) => (
          <TodoItem todo={todo} key={i} />
        ))
      }

    </>
  )
}
