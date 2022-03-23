export const sendForm = () => {
  const arrow = document.querySelector('.up')
  const modal = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')
  const form = document.querySelector('form')
  const statusBlock = document.createElement('div')
  const loadText = 'Идёт отправка...'
  const successText = 'Спасибо!Наш менеджер с вами свяжется.'
  const errorText = 'Ошибка'

  const formElements = form.querySelectorAll('input')

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json)
  }

  const cleanData = () => {
    formElements.forEach((input) => {
      if (input.name === 'tel' || input.name === 'fio') {
        input.value = ''
      }
    })
  }

  const submitForm = () => {
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((value, key) => {
      formBody[key] = value
    })
    
    sendData(formBody)
    .then(() => {
      statusBlock.textContent = successText
      setTimeout(() => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        statusBlock.textContent = ''
        document.body.style.overflow = ''
        if (window.pageYOffset > 520) {
          arrow.style.display = 'block'
        }
      }, 3000)
      cleanData()
    })
    .catch(() => {
      statusBlock.textContent = errorText
    })
  }

  const requiredPhone = () => {
    formElements.forEach((input) => {
      if (input.name === 'tel') {
        input.setAttribute('required', true)
      }
    })
  }

  try {
    if (!form) {
      throw new Error('Верните форму на место!')
    }
    requiredPhone()

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      submitForm()
    })
  } catch (error) {
    console.log(error.message)
  }
}
