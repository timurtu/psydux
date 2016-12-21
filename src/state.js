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
  components.forEach(({ returnValue, node }) => {

    switch (typeof returnValue) {

      case 'object': {
        Array.isArray(returnValue) ? Array.prototype.forEach.call(returnValue, element =>
          node.appendChild(element)) : node.appendChild(returnValue)
        break
      }

      case 'string': {
        node.appendChild(document.createTextNode(returnValue))
        break
      }
    }
  })
}

export default {
  get, set
}
