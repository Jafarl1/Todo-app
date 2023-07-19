/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./todo-list.styles.scss"
import TodoItem from "../todo-item/todo-item.component"

export default function TodoList({ todos, setTodos }) {

  const editTodo = () => {
    // console.log('edit');
  };

  const deleteTodo = (id) => {
    const newTodosArray = todos.filter(todo => todo.id !== id);
    setTodos(newTodosArray)
  }

  return (
    <>
      {
        todos.map((todo, i) => (
          <TodoItem
            todo={todo}
            key={i}
            i={i + 1}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))
      }

    </>
  )
}
