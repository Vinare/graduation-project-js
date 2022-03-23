export const validations = () => {
  const inputText = document.querySelectorAll("form input[name='fio']")
  const inputPhone = document.querySelectorAll("form input[name='tel']")

  const regExpText = /[^а-я\-\s]+/i
  const regExpPhone = /[^\d()\s-+]/g

  const manyDash = /(\-+)/g
  const manySpace = /(\s+)/g
  const edgeDash = /^\-|\-$/g
  const edgeSpace = /^\s+|\s+$/g

  inputText.forEach((input) => {
    input.setAttribute('pattern', '.{2,}')
    input.setAttribute('title', 'Минимум 2 символа')
    input.setAttribute('required', true)
    
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpText, "")
    })
  })

  inputPhone.forEach((input) => {
    input.setAttribute('pattern', '.{6,}')
    input.setAttribute('title', 'Минимум 6 символов')
    input.setAttribute('required', true)

    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpPhone, "")
    })
  })

  inputText.forEach((input) => {
    input.addEventListener("blur", (e) => {
      let capitalizeLetterFunc = (match) => match.toUpperCase()

      e.target.value = e.target.value
        .replace(manyDash, "-")
        .replace(manySpace, " ")
        .replace(edgeDash, "")
        .replace(edgeSpace, "")

      e.target.value = e.target.value.toLowerCase()
      e.target.value = e.target.value
        .replace(/^[а-я]{1}|\s{1}[а-я]{1}/gi, capitalizeLetterFunc)
    })
  })

  inputPhone.forEach((input) => {
    input.addEventListener("blur", (e) => {
      e.target.value = e.target.value
        .replace(manyDash, "-")
        .replace(manySpace, " ")
        .replace(edgeDash, "")
        .replace(edgeSpace, "")
    })
  })
}