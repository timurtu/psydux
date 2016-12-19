/**
 * Created by timur on 12/19/2016.
 */

const states = [{}]
let count = 0

function get() {
  return states[count]
}

function set(nextState) {
  states.push(nextState)
  count++
}

export default {
  get, set
}
