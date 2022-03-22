export const slider = () => {
  const sliderBlock = document.querySelector('.top-slider')
  const slides = document.querySelectorAll('.item')
  const slidesContent = sliderBlock.querySelectorAll('.table')
  const timeInterval = 3000

  let screenWidth = screen.width
  let currentSlide = 0
  let interval

  const prevSlide = (elems, index) => {
    elems[index].style.display = 'none'
  }

  const nextSlide = (elems, index) => {
    elems[index].style.display = 'block'
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide)

    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide)
  }

  const startSlide = (timer) => {
    interval = setInterval(autoSlide, timer)
  }

  const allScreenWidthVisibleContent = () => {
    if (screenWidth >= 992) {
      slidesContent.forEach((slideContent) => {
        slideContent.style.opacity = 1
        slideContent.style.visibility = 'visible'
      })
    }
  }

  allScreenWidthVisibleContent()
  startSlide(timeInterval)
}
