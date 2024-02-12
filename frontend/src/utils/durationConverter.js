// Конвертор в часы и минуты
export function durationConverterMovie(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч${minutes}м`
}
