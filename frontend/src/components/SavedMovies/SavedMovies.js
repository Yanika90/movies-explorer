import React, { useState, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import { filterShortMovies } from "../../utils/filterShortMovies"
import { filterDurationMovie } from "../../utils/filterDuration"

function SavedMovies({ loggedIn, savedMovies, onremoveCard }) {
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [isNotFoundPage, setIsNotFoundPage] = useState(false)

  function getShortFilteredMovie() {
    setIsShortMovies(!isShortMovies)
  }

  function getSearchFilteredMovie(query) {
    setSearchQuery(query)
  }

  useEffect(() => {
    const moviesCardList = filterShortMovies(savedMovies, searchQuery)
    setFilteredMovies(
      isShortMovies ? filterDurationMovie(moviesCardList) : moviesCardList
    )
  }, [savedMovies, isShortMovies, searchQuery])

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFoundPage(true)
    } else {
      setIsNotFoundPage(false)
    }
  }, [filteredMovies])

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        getSearchFilteredMovie={getSearchFilteredMovie}
        onFilter={getShortFilteredMovie}
      />
      <MoviesCardList
        isSavedFilms={true}
        cards={filteredMovies}
        savedMovies={savedMovies}
        onremoveCard={onremoveCard}
        isNotFoundPage={isNotFoundPage}
      />
      <Footer />
    </section>
  )
}

export default SavedMovies
