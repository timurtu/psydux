## Next steps

With psydux you can style your components very easily, or use sass.

```javascript
import { el, render } from 'psydux'


const style = 'margin: .25rem'

const container = (...elements) => el('div', () => elements, { class: 'container' })

const title = msg => el('h1', () => msg, {
  class: 'display-4',
  style
})

const input = placeholder => el('input', {
  autoFocus: true,
  placeholder,
  class: 'form-control',
  style
})

const button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block`, style })

const list = (...items) => el('ul', () => msgs.map(msg => 
  el('li', () => msg, { class: 'list-group-item' })),
{ class: 'list-group' })

render(
  container(
    title('Todo list'),
    input('Add a new todo!'),
    button({type: 'primary', text: 'Add todo'}),
    list('temporary', 'todo', 'items')
  )
)
```

Pass around style and class properties when necessary.
 
[Psydux State]() TODO
