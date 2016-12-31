import { el, render, route } from 'psydux'

const container = (...els) => el('div', () => els, { class: 'container' })

const form = (...els) => el('form', () => els)

const input = placeholder => el('input', { class: 'form-control', placeholder })

const button = text => el('button', () => text, { class: 'btn btn-default' })

const userInput = input('Username...')

const userForm = container(form(
  userInput,
  button('Find user')
))

userForm.onsubmit = e => {
  e.preventDefault()

}

render(
  // userForm,
  route('/:foo', foo => {
    console.log(foo)
    return button(foo)
  })
)
