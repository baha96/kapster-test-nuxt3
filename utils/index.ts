
/*
*
* Date formatting for everyone,
* This code can be improved in the future.
*
* @param {string} date - return formatted date
* @returns {string}
*
* */
export function parseDate(date: string) {
  return new Date(date).toLocaleDateString("ru-RU", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}