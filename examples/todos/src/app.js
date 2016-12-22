import { el, render } from 'psydux'

const container = (...elements) => el('div', () => elements, { class: 'container-fluid' })

const title = text => el('h1', () => text)

const input = placeholder => el('input', { placeholder, class: 'form-control' })

const form = (...elements) => el('form', () => elements)

const row = (...elements) => el('div', () => elements, { class: 'row' })

const col = (amount, display, ...elements) => el('div', () => elements, { class: `col-${display}-${amount}` })

const button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block` })

const todoInput = input('Add Todo')

const todoForm = form(
  row(
    col(8, 'xs', todoInput),
    col(4, 'xs', button({ type: 'success', text: 'Add' }))
  )
)

const todoList = el('div', { class: 'list-group' })

const todoItem = item => el('a', () => item, {
  class: 'list-group-item',
  role: 'button',
})

todoForm.onsubmit = e => {

  e.preventDefault()

  if(todoInput.value === '') {
    return
  }

  const todo = todoItem(todoInput.value)

  todo.onclick = function() {
    this.style.textDecoration = this.style.textDecoration === 'none' ? 'line-through' : 'none'
  }

  todoList.unshift(todo)

  todoInput.value = ''
}

render(
  container(
    title('Todo List'),
    todoForm,
    el('hr'),
    todoList
  )
)

todoInput.focus()
