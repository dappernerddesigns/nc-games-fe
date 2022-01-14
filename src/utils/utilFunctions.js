export const dateFormat = (dateString) => {
  let date = new Date(dateString)
  return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
}
