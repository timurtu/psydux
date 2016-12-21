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

  console.log(components)
}

export default {
  get, set
}
