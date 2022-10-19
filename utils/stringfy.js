// function to convert name to string
export const stringfy = (value) => {
  const str = value
    .toLowerCase()
    .split(' ')
    .join('-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return str
}
