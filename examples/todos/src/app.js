import { el, render } from 'psydux'

const input = placeholder => el('input', { placeholder, class: 'form-control' }),
  form = (...elements) => el('form', () => elements),
  container = (...elements) => el('div', () => elements, { class: 'container-fluid' }),
  button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block` }),
  row = (...elements) => el('div', () => elements, { class: 'row' }),
  col = (amount, display, ...elements) => el('div', () => elements, { class: `col-${display}-${amount}` }),
  title = text => el('h1', () => text),
  listGroup = () => el('div', { class: 'list-group' }),
  listGroupItem = item => el('a', () => item, { class: 'list-group-item' }),
  todoInput = input('Add Todo'),
  todoList = listGroup(),
  todoForm = form(row(
    col(8, 'xs', todoInput),
    col(4, 'xs', button({ type: 'success', text: 'Add' }))
  ))

todoForm.onsubmit = e => {
  e.preventDefault()

  if (todoInput.value === '') {
    return
  }

  const todo = listGroupItem(todoInput.value)

  todo.onclick = function () {
    this.style.textDecoration = this.style.textDecoration === 'none' ? 'line-through' : 'none'
  }

  todoList.unshift(todo)
  todoInput.value = ''
}

render(container(title('Todo list'), todoForm, el('hr'), todoList))

todoInput.focus()
