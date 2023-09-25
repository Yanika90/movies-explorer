// Определение короткометражных фильмов
export function filterShortMovies(movies, query) {
  const moviesShortQuery = movies.filter((movie) => {
    const movieLanguageRu = String(movie.nameRU).toLowerCase().trim()
    const movieLanguageEn = String(movie.nameEN).toLowerCase().trim()
    const userQuery = query.toLowerCase().trim()
    return (
      movieLanguageRu.indexOf(userQuery) !== -1 ||
      movieLanguageEn.indexOf(userQuery) !== -1
    )
  })
  return moviesShortQuery
}
