/**
 * Created by timur on 12/19/2016.
 */

import { components } from './el'

const states = [{}]
let count = 0

function get() {
  return states[count]
}

function set(nextState) {
  states.push(nextState)
  count++
  update(components)
}

function update(components) {
  components.forEach(({ tag, returnValue, callback, node }) => {

    const nextValue = callback()

    if (returnValue !== nextValue) {

      const nextNode = document.createElement(tag)

      switch (typeof returnValue) {

        case 'object': {
          Array.isArray(nextValue) ? Array.prototype.forEach.call(nextValue, element =>
            nextNode.appendChild(element)) : node.appendChild(nextValue)
          break
        }

        case 'string': {
          nextNode.appendChild(document.createTextNode(nextValue))
          break
        }
      }
    }
  })
}

export default {
  get, set
}
