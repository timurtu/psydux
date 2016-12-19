# Psydux

A functional JavaScript Framework for building user interfaces

- __Functional__ - Declare functions that return DOM elements

- __Modular__ - Share functions across applications

- __DRY and Reusable__ - Psydux apps do not contain one line of HTML

[Get started with the cli](https://github.com/timurtu/psydux-cli)

## Example

```javascript
import { el } from 'psydux'

const button = ({ type, text }) => el('button', { class: `btn btn-${type}` }, () => text)

const btn = button({ type: 'primary', text: 'hello' })

btn.onclick = () => alert('psydux')
```

Join our [Gitter chat](https://gitter.im/psydux-framework/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

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

Learn more about the Psydux CLI [here](https://github.com/timurtu/psydux-cli).

[Get started with Psydux](docs/getting-started.md)
