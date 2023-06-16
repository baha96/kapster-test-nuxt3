export function parseDate(date: string) {
  return new Date(date).toLocaleDateString("ru-RU", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}