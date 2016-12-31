import { el, render, route } from 'psydux'

const h1 = text => el('h1', () => text)

const links = (...links) => el('div', () => links.map(link =>
    el('a', () => link, { href: `/${link}`, class: 'list-group-item' })),
  { class: 'list-group' })

render(
  links('foo', 'bar'),
  route('/foo', h1('foo')),
  route('/bar', h1('bar')),
)
