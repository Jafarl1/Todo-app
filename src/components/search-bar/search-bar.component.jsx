/* eslint-disable react/prop-types */
import "./search-bar.styles.scss"

export default function SearchBar({ todos, setFilteredTodos }) {

  const handleSearchInput = (event) => {
    const currentValue = event.target.value;
    const filtered = todos.filter(todo => todo.todo.toLowerCase().includes(currentValue.toLowerCase()));
    setFilteredTodos(filtered);
  };




  return (
    <>
      <div className="search-bar-component">
        <input
          type="search"
          name="search-bar"
          className="input search-bar"
          placeholder="Search"
          onChange={handleSearchInput}
        />
      </div>
    </>
  )
}
