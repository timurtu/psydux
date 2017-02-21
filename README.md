# Psydux

A functional JavaScript Framework for building user interfaces

- __Functional__ - Declare functions that return components

- __Modular__ - Share functions across applications

- __DRY and Reusable__ - Psydux apps do not contain one line of HTML

[Create and develop apps with the psydux cli](https://github.com/timurtu/psydux-cli)

[Get started with Psydux](docs/getting-started.md)

## Install

```
npm install --save psydux
```

[Join our Gitter chat](https://gitter.im/psydux-framework/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## Example

```javascript
import { el, render } from 'psydux'

const h1 = text => el('h1', () => text)

render(
  h1('Hello, World!')
)
```

[See more examples](https://github.com/timurtu/psydux/tree/master/examples)

Psydux is Modern JavaScript framework for building web applications with reusable functions.

The easiest way get started using the Psydux JavaScript framework is to install the command line interface. Install [node](https://nodejs.org) first if you have not already.

[Learn more about the Psydux CLI](https://github.com/timurtu/psydux-cli)
