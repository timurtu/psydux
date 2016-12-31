import { el, render, route } from 'psydux'

const container = (...els) => el('div', () => els, { class: 'container' })

const link = href => el('a', () => href, { href, style: 'margin: .5em' })

const h1 = text => el('h1', () => text)

const p = text => el('p', () => text)

const nav = container(
  link('/'),
  link('home'),
  link('profile')
)

const index = container(h1('Index'))

const home = container(
  h1('Home'),
  p('Home page text')
)

const profile = container(
  h1('Profile'),
  p('Profile page text')
)

render(
  nav,
  route('/', index),
  route('/home', home),
  route('/profile', profile)
)
