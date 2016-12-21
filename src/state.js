/**
 * Created by timur on 12/19/2016.
 */

import { callbacks } from './el'

const states = [{}]
let count = 0

function get() {
  return states[count]
}

function set(nextState) {
  states.push(nextState)
  count++
  callbacks.forEach(cb => cb())
}

export default {
  get, set
}
