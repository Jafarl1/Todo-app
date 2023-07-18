import { useState } from "react";
import Navbar from "./components/navbar/navbar.component";
import SearchBar from "./components/search-bar/search-bar.component";
import TodoList from "./components/todo-list/todo-list.component";
import "./root-styles.scss";

function App() {

  const [todos, setTodos] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleChange = (event) => {
    setSearchBarValue(event.target.value)
  };

  const addTodo = () => {
    searchBarValue
      ? setTodos([...todos, searchBarValue])
      : alert('Fill the blank please')
  };

  console.log(todos);

  return (
    <>
      <div className="app">
        <h1>Todo app</h1>
        <Navbar />
        <SearchBar handleChange={handleChange} addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App
