## Getting started
Psydux makes it incredibly easy to build and manage web applications.

Let's create the obligatory todo application together.

Bootstrap comes loaded with Psydux by default. To remove it, simply remove the `<link>` referencing the bootstrap CDN located in __(your-app)/.psydux/dist/index.html__. If you want to learn more about the special class names we'll be using you can look at Bootstrap's documentation [here](https://v4-alpha.getbootstrap.com/getting-started/introduction/).

If you don't have the Psydux command-line interface installed you can install it with the following terminal command.
```
npm i -g psydux-cli
```
Use the cli to create a new project by simply typing in
```
psydux todos
```
Creates a new app called __todos__.
```
cd todos
```
Changes the working directory to the newly created app.
```
psydux
```
Starts the app development server. Open up a web browser to the URL logged to the terminal.

As you may know, Psydux lets you build web applications without the use of HTML. This means that we do not create an index.html. So where does your app begin?

Remove every file from the __src__ folder so we can start our todo application from scratch.

Let's create our first element. Create a file called __app.js__ and program the following.

```javascript
import { render, el } from 'psydux'

const h1 = text => el('h1', () => text)

render(h1('Hello, world!'))
```

Now you'll notice a few things here. For one, we're not repeating that h1 tag twice. We're simply declaring the type of element we wish to create and passing it to Psydux's el (element) function.

Next is a callback function. The return value here is a String, but it doesn't need to be.

If you run psydux from the psydux-cli at this point you should see __'Hello, world!'__ in your browser. This is nice and all but our app isn't really doing much so let's fix that.

Remove the line we created and program the following

```javascript
import { render, el } from 'psydux'


const input = placeholder => el('input', { placeholder })

render(input('Add a new todo!'))
```

The el or element function takes more than just the type of your element. Specifically, it takes 3 different things.

1. Type of element (string)
2. Callback (function)
3. Attributes (object)

What's the callback for? I'll explain by fixing our current problem. If you look at the browser you'll see that our element is squished up against the side. It's hurting my eyes. Let's give it some pre-built padding with bootstrap.

```javascript
import { render, el } from 'psydux'


const h1 = text => el('h1', () => text)

const input = placeholder => el('input', { placeholder })

render(
  el('div', () => [ 
    h1('Todo List'), 
    input('Add a new todo!')
  ], { class: 'container' })
)
```

Ah that's much better. We could also write it like this.

```javascript
import { el, render } from 'psydux'


render(
  el('div', () => [
    el('h1', () => 'Todo List'),
    el('input', { placeholder: 'Add a new todo!' })
  ], { class: 'container' })
)
```

Next let's refactor by creating reusable functions that return components and add a button

```javascript
import { el, render } from 'psydux'


const container = (...els) => el('div', () => els, { class: 'container' })

const h1 = text => el('h1', () => text)

const input = placeholder => el('input', { placeholder })

const button = text => el('button', () => text)

render(container(
  h1('Todo List'),
  input('Add a new todo!'),
  button('Add')
))
```

You should be seeing a padded h1, input, and button all with corresponding text in your browser.

[Styling components](styling-components.md)

[Example Applications](https://github.com/timurtu/psydux/tree/master/examples)
