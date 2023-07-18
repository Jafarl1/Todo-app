/* eslint-disable react/prop-types */
import "./search-bar.styles.scss"

export default function SearchBar({ handleChange, addTodo }) {

  return (
    <>
      <div className="search-bar-component">
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search"
          onChange={handleChange}
        />
        <button className="add-button" onClick={addTodo}>
          Add todo
        </button>
      </div>
    </>
  )
}
