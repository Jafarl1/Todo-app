import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar.component";
import SearchBar from "./components/search-bar/search-bar.component";
import TodoList from "./components/todo-list/todo-list.component";
import "./root-styles.scss";
import AddTodo from "./components/add-todo/add-todo.component";
import Info from "./components/info/info.component"

function App() {

  const [navbarState, setNavbarState] = useState("add");

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos]);


  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="header">
            my diary
          </h1>
          <Navbar setNavbarState={setNavbarState} />
          {
            navbarState === "search"
              ? <SearchBar
                todos={todos}
                setFilteredTodos={setFilteredTodos}
              />
              : navbarState === "add"
                ? <AddTodo todos={todos} setTodos={setTodos} />
                : ""
          }
          {
            navbarState === "info"
              ? <Info />
              : <TodoList todos={filteredTodos} setTodos={setTodos} />
          }
        </div>
      </div>
    </>
  )
}

export default App
