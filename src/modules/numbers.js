export const numbers = () => {
  const nums = document.querySelectorAll('.num')
  const num1 = document.getElementById('num1')

  const values = ['15', '20', '45', '50']

  nums.forEach((number, idx) => {
    number.textContent = +values[idx]

    number.style.opacity = '1'
  })
}
