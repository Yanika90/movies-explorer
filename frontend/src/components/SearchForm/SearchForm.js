import React, { useState, useEffect } from "react"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import { useLocation } from "react-router-dom"
import "./SearchForm.css"

function SearchForm({ getSearchFilteredMovie, onFilter, isShortMovies }) {
  const [isQueryError, setIsQueryError] = useState(false)
  const location = useLocation()
  const [query, setQuery] = useState("")

  function editProfileUserInfo(e) {
    e.preventDefault()
    if (query.trim().length === 0) {
      setIsQueryError(true)
    } else {
      setIsQueryError(false)
      getSearchFilteredMovie(query)
    }
  }

  function getEditQueryData(event) {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch")
      setQuery(localQuery)
    }
  }, [location])

  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={editProfileUserInfo}>
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          value={query || ""}
          onChange={getEditQueryData}
        ></input>
        <button className="search__btn" type="submit"></button>
      </form>
      <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
      {isQueryError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}
      <div className="search__border-bottom"></div>
    </section>
  )
}

export default SearchForm
