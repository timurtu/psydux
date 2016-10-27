/**
 * Created by timur on 8/31/16.
 */

const psy = {}

psy.el = function (tag, attributes, callback) {

  const e = document.createElement(tag)

  for (const a in attributes) {
    e.setAttribute(a, attributes[a])
  }

  if(callback) {

    const returnValue = callback()

    /**
     * Switch on the returnValue to narrow down type
     */
    switch (typeof returnValue) {

      /* they returned a list of elements */
      case 'object':
        switch (tag) {
          default:
            Array.prototype.forEach.call(returnValue, element => e.appendChild(element))
        }
        break

      /* they returned a string */
      case 'string':

      default:
        /* Switch on the tag to decide how to change the node's text */
        switch (tag) {
          default:
            e.appendChild(document.createTextNode(returnValue))
        }
    }
  }

  document.body.appendChild(e)
  return e
}

module.exports = psy
