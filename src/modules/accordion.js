export const accordion = () => {
  const accordion = document.querySelector('.accordeon')
  const elements = accordion.querySelectorAll('.element')
  const elementsContent = accordion.querySelectorAll('.element-content')

  const removeClassActive = (elems) => {
    elems.forEach((elem) => {
      elem.classList.remove('active')
    })
  }

  const showContentOfActiveElement = (contents) => {
    contents.forEach((content) => {
      content.style.display = 'none'
      if (content.closest('.active')) {
        content.style.display = 'block'
      }
    })
  }

  elements.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active')
      } else {
        removeClassActive(elements)
        elem.classList.add('active')
      }
      showContentOfActiveElement(elementsContent)
    })
  })
}
