import { el, render } from 'psydux'

function div() {
  return el('div', ...arguments)
}

const input = placeholder => el('input', {
  placeholder, class: 'form-control'
})

const form = (...elements) => el('form', () => elements)

const container = (...elements) => div(() => elements, {
  class: 'container-fluid'
})

const button = ({ type, text }) => el('button', () => text, {
  class: `btn btn-${type} btn-block`
})

const row = (...elements) => div(() => elements, {
  class: 'row'
})

const col = (amount, display, ...elements) => div(() => elements, {
  class: `col-${display}-${amount}`
})

const title = text => el('h1', () => text)

const listGroup = () => div({
  class: 'list-group'
})

const listGroupItem = item => div(() => item, {
  class: 'list-group-item',
  style: 'user-select: none;'
})

const todoInput = input('Add Todo')

const todoList = listGroup()

const todoForm = form(
  row(
    col(8, 'xs', todoInput),
    col(4, 'xs', button({ type: 'success', text: 'Add' }))
  )
)

todoForm.onsubmit = e => {
  e.preventDefault()

  if (todoInput.value === '') {
    return alert('Todo cannot be empty')
  }

  const todo = listGroupItem(todoInput.value)

  todo.onclick = function () {
    this.style.textDecoration = this.style.textDecoration === 'none' ?
      'none' :
      'line-through'
  }

  todoList.unshift(todo)
  todoInput.value = ''
}

render(
  container(
    title('Todo list'),
    todoForm,
    el('hr'),
    todoList
  )
)

todoInput.focus()
