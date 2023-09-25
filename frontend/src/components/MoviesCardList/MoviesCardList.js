import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader"
import {
  DESKTOP_COUNTER_MOVIES,
  TABLET_COUNTER_MOVIES,
  MOBILE_COUNTER_MOVIES,
} from "../../utils/constants"
import SearchError from "../SearchError/SearchError"
import "./MoviesCardList.css"

function MoviesCardList({
  cards,
  isLoading,
  savedMovies,
  isSavedFilms,
  handleLikeFilm,
  onremoveCard,
  hasRequestError,
  isNotFoundPage,
}) {
  const [shownMovies, setShownMovies] = useState(0)
  const { pathname } = useLocation()

  function getSavedListMovies(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
  }

  // Определяет количество отображаемых карточек
  // в зависимости от ширины экрана
  function getDisplayShowCountMovies() {
    const display = window.innerWidth
    if (display > 1160) {
      setShownMovies(12)
    } else if (display > 768) {
      setShownMovies(8)
    } else {
      setShownMovies(5)
    }
  }

  useEffect(() => {
    getDisplayShowCountMovies()
  }, [cards])

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getDisplayShowCountMovies)
    }, 500)
    return () => {
      window.removeEventListener("resize", getDisplayShowCountMovies)
    }
  })

  // Увеличивает количество карточек при клике на кнопку Ещё
  function getShowCountMoviesClickButton() {
    const display = window.innerWidth
    if (display > 1160) {
      setShownMovies(shownMovies + DESKTOP_COUNTER_MOVIES)
    } else if (display > 768) {
      setShownMovies(shownMovies + TABLET_COUNTER_MOVIES)
    } else {
      setShownMovies(shownMovies + MOBILE_COUNTER_MOVIES)
    }
  }

  return (
    <section className="films">
      {isLoading && <Preloader />}
      {isNotFoundPage && !isLoading && (
        <SearchError errorText={"Ничего не найдено"} />
      )}
      {hasRequestError && !isLoading && (
        <SearchError
          errorText={
            "Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />
      )}
      {!isLoading && !hasRequestError && !isNotFoundPage && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="films__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedListMovies(savedMovies, card)}
                    cards={cards}
                    card={card}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onremoveCard={onremoveCard}
                  />
                ))}
              </ul>
              <div className="films__button-container"></div>
            </>
          ) : (
            <>
              <ul className="films__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedListMovies(savedMovies, card)}
                    cards={cards}
                    card={card}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onremoveCard={onremoveCard}
                  />
                ))}
              </ul>
              <div className="films__btn-block">
                {cards.length > shownMovies ? (
                  <button
                    className="films__btn"
                    onClick={getShowCountMoviesClickButton}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default MoviesCardList
