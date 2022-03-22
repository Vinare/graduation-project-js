import { animate } from './helpers.js'

export const modal = () => {
  const arrow = document.querySelector('.up')
  const modal = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')
  const modalCloseBtn = document.querySelector('.modal-close')
  const elementsOfCarousel = document.querySelectorAll(
    '.services-carousel .fancyboxModal'
  )
  const imgWrappers = document.querySelectorAll(
    '.services-carousel .img-wrapper'
  )
  const mainWrapper = document.querySelector('.main-wrapper')
  const form = document.querySelector('[name="form-callback"]')
  const formElements = form.querySelectorAll('input')

  const cleanData = () => {
    formElements.forEach((input) => {
      if (input.name === 'tel' || input.name === 'fio') {
        input.value = ''
      }
    })
  }

  const visibleModalWindow = () => {
    animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction
      },
      draw(progress) {
        modal.style.opacity = progress
        modalOverlay.style.opacity = progress
      },
    })

    modal.style.display = 'block'
    modalOverlay.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  const unvisibleModalWindow = () => {
    modal.style.display = 'none'
    modalOverlay.style.display = 'none'
  }

  const openModalWindow = (button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()

      if (
        e.target.closest('.swiper-slide > .element') ||
        e.target.matches('.callback-btn') ||
        e.target.classList.contains('button-services')
      ) {
        visibleModalWindow()
        if (arrow.style.display === 'block') {
          arrow.style.display = 'none'
        }
      }
    })
  }

  const closeModalWindow = (elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()

      unvisibleModalWindow()

      document.body.style.overflow = ''

      if (window.pageYOffset > 520) {
        arrow.style.display = 'block'
      }

      cleanData()
    })
  }

  const removeClassAbsolute = () => {
    elementsOfCarousel.forEach((elementOfCarousel) => {
      elementOfCarousel.classList.remove('absolute')
    })
  }

  const addClassAbsolute = () => {
    imgWrappers.forEach((wrapper) => {
      wrapper.classList.add('absolute')
    })
  }

  removeClassAbsolute()
  addClassAbsolute()
  openModalWindow(mainWrapper)
  closeModalWindow(modalOverlay)
  closeModalWindow(modalCloseBtn)
}
