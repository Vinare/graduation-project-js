export const menu = () => {
  const mobileMenu = document.querySelector('.mobile-menu')

  const goToAncor = (e) => {
    document.querySelector(e.hash).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  document.addEventListener('click', (e) => {
    if (e.target.matches('input[type=submit]')) {
      return
    }

    e.preventDefault()
    if (e.target.closest('.mob-menu-btn')) {
      mobileMenu.style.right = 0
    }

    if (e.target.closest('.mobile-menu-close')) {
      mobileMenu.style.right = ''
    }

    if (e.target.closest('.callback-btn')) {
      mobileMenu.style.right = ''
    }

    if (e.target.matches('ul > li > a') || e.target.matches('menu > a')) {
      goToAncor(e.target.closest('a'))
      mobileMenu.style.right = ''
    }
  })
}
