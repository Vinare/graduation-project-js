export const validationForm = () => {
  const form = document.querySelector('[name="form-callback"]')
  const formElements = form.querySelectorAll('input')

  const validate = (list) => {
    let success = true
    list.forEach((input) => {
      if (input.name === 'tel') {
        if (/[^\+\d]/g.test(input.value.trim())) {
          success = false
        }
      }

      if (input.name === 'fio') {
        if (/[^а-я]/gi.test(input.value.trim())) {
          success = false
        }
      }
    })

    return success
  }

  return validate(formElements)
}
