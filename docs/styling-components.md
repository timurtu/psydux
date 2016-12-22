## Next steps

With psydux you can style your components very easily, or use sass.

```javascript
import { el, render } from 'psydux'


const style = 'margin: .25rem'

const container = (...elements) => el('div', {
  class: 'container'
}, () => elements)

const title = msg => el('h1', {
  class: 'display-4',
  style
}, () => msg)

const input = placeholder => el('input', {
  autoFocus: true,
  placeholder,
  class: 'form-control',
  style
})

const button = ({type, text}) => el('button', () => text, { class: `btn btn-${type} btn-block`, style })

const list = msgs => el('ul', { class: 'list-group' }, () => 
  msgs.map(msg => el('li', () => msg, { class: 'list-group-item' })))

render(
  container(
    title('Todo list'),
    input('Add a new todo!'),
    button({type: 'primary', text: 'Add todo'}),
    list(todos)
  )
)
```

Pass around style and class properties when necessary. 
