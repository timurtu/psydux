import { el, state } from 'psydux'

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

state.set({
  todos: []
})

todoForm.onsubmit = e => {

  e.preventDefault()

  state.set({
    todos: [
      ...state.get().todos,
      todoInput.value
    ]
  })

  console.log(state.get().todos)

  todoInput.value = ''
}

const todoList = () => el('ul', () => state.get().todos.map(todo => el('li', () => todo)))

container(
  title('Todo List'),
  todoForm,
  todoList()
)
