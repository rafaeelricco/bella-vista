// conditional function to display the details
export const conditional = (value) => {
  if (value == 0 || value == null) {
    return 'none'
  } else {
    return 'flex'
  }
}
