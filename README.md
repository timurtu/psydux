# Psydux

A functional JavaScript Framework for building user interfaces

- __Functional__ - Declare functions that return DOM elements

- __Modular__ - Share functions across applications

- __DRY and Reusable__ - Psydux apps do not contain one line of HTML

[Get started with the Psydux cli](https://github.com/timurtu/psydux-cli)

[Join our Gitter chat](https://gitter.im/psydux-framework/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## Install

```
npm install --save psydux
```

## Example

```javascript
import { el, render } from 'psydux'

const button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type}` })

const btn = button({ type: 'primary', text: 'hello' })

btn.onclick = () => alert('psydux')

render(btn)
```

[See more examples](https://github.com/timurtu/psydux/tree/master/examples)

Psydux is Modern JavaScript framework for web developers who are sick of repeating themselves with markup languages and want to build web applications with reusable functions.

The easiest way get started using the Psydux JavaScript framework is to install the command line interface. Install [node](https://nodejs.org)
first if you have not already.

Open up a terminal or command prompt and enter the following

```
npm install -g psydux-cli
```

then

```
psydux my-app && cd my-app && psydux
```

[Learn more about the Psydux CLI](https://github.com/timurtu/psydux-cli).

[Get started with Psydux](docs/getting-started.md)
