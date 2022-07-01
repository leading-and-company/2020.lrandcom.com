export default (str: string): string => {
  const date = new Date(str)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const y = date.getFullYear()
  const m = month[date.getMonth()]
  const d = date.getDate()
  return `${m} ${d}, ${y}`
}
