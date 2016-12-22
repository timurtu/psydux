import { el, render } from 'psydux'
import container from './components/container'
import input from './components/input'
import { row, col } from './components/grid'
import button from './components/button'
import form from './components/form'

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

  if (todoInput.value === '') {
    return
  }

  const todo = todoItem(todoInput.value)

  todo.onclick = function () {
    this.style.textDecoration = this.style.textDecoration === 'none' ? 'line-through' : 'none'
  }

  todoList.unshift(todo)

  todoInput.value = ''
}

render(
  container(
    el('h1', () => 'Todo List'),
    todoForm,
    el('hr'),
    todoList
  )
)

todoInput.focus()
