import { MAXIMAL_SHORT_DURATION_MOVIE } from "./constants"

// Длительность фильмов
export function filterDurationMovie(movies) {
  return movies.filter((movie) => movie.duration < MAXIMAL_SHORT_DURATION_MOVIE)
}
