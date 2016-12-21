/**
 * Created by timur on 12/19/2016.
 */

import dom from 'domali'
import { components } from './el'

const states = [{}]
let count = 0

function get() {
  return states[count]
}

function set(nextState) {
  states.push(nextState)
  count++
  if(components) {
    update(components)
  }
}

function update(components) {

  components.forEach(comp => dom.render(comp.node))

}

export default {
  get, set
}
