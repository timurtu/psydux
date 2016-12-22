import { el, state, render } from 'psydux'

const container = (...elements) => el('div', () => elements, { class: 'container-fluid' })
const title = text => el('h1', () => text)
const form = (...elements) => el('form', () => elements)
const input = placeholder => el('input', { placeholder, class: 'form-control' })
const button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block` })
const row = (...elements) => el('div', () => elements, { class: 'row' })
const col = (amount, display, ...elements) => el('div', () => elements, { class: `col-${display}-${amount}` })

const todoInput = input('Add Todo')

const todoForm = form(
  row(
    col(8, 'xs', todoInput),
    col(4, 'xs', button({ type: 'success', text: 'Add' }))
  )
)

const todoList = el('ul')

todoForm.onsubmit = e => {
  e.preventDefault()
  todoList.push(todoInput.value)
  todoInput.value = ''
}

render(
  container(
    title('Todo List'),
    todoForm,
    todoList
  )
)

