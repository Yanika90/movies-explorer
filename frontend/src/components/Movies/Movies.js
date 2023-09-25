import React, { useState, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { filterShortMovies } from "../../utils/filterShortMovies"
import { filterDurationMovie } from "../../utils/filterDuration"
import * as movies from "../../utils/MoviesApi"

function Movies({ loggedIn, handleLikeFilm, onremoveCard, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false)
  const [initialCardsMovies, setInitialCardsMovies] = useState([])
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState([])
  const [hasRequestError, setHasRequestError] = useState(false)
  const [isNotFoundPage, setIsNotFoundPage] = useState(false)

  // Поиск фильмов
  function getSearchFilteredMovie(query) {
    localStorage.setItem("movieSearch", query)
    localStorage.setItem("shortMovies", isShortMovies)

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"))
      getFilteredMovie(movies, query, isShortMovies)
    } else {
      setIsLoading(true)
      movies
        .getMovies()
        .then((cardsData) => {
          getFilteredMovie(cardsData, query, isShortMovies)
          setHasRequestError(false)
        })
        .catch((err) => {
          setHasRequestError(true)
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  // Фильтрация фильмов
  function getFilteredMovie(movies, query, short) {
    const moviesCardList = filterShortMovies(movies, query, short)
    setInitialCardsMovies(moviesCardList)
    setFilteredMovies(
      short ? filterDurationMovie(moviesCardList) : moviesCardList
    )
    localStorage.setItem("movies", JSON.stringify(moviesCardList))
    localStorage.setItem("allMovies", JSON.stringify(movies))
  }

  // Пререключение чекбокса
  function getShortFilteredMovie() {
    setIsShortMovies(!isShortMovies)
    if (!isShortMovies) {
      if (filterDurationMovie(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDurationMovie(initialCardsMovies))
      } else {
        setFilteredMovies(filterDurationMovie(initialCardsMovies))
      }
    } else {
      setFilteredMovies(initialCardsMovies)
    }
    localStorage.setItem("shortMovies", !isShortMovies)
  }

  // Получение короткометражных фильмов из локального хранилища
  useEffect(() => {
    setIsShortMovies(localStorage.getItem("shortMovies") === "true")
  }, [])

  // Получение фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"))
      setInitialCardsMovies(movies)
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDurationMovie(movies))
      } else {
        setFilteredMovies(movies)
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      setIsNotFoundPage(filteredMovies.length === 0)
    } else {
      setIsNotFoundPage(false)
    }
  }, [filteredMovies])

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onFilter={getShortFilteredMovie}
        isShortMovies={isShortMovies}
        getSearchFilteredMovie={getSearchFilteredMovie}
      />
      <MoviesCardList
        isLoading={isLoading}
        cards={filteredMovies}
        savedMovies={savedMovies}
        isSavedFilms={false}
        handleLikeFilm={handleLikeFilm}
        onremoveCard={onremoveCard}
        hasRequestError={hasRequestError}
        isNotFoundPage={isNotFoundPage}
      />
      <Footer />
    </section>
  )
}

export default Movies
