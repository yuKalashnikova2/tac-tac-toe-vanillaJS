export const Button = ({ text, onClick }) => {
  const button = document.createElement('button')

  button.textContent = text
  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick)
  }

  return button
}
