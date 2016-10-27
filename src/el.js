const el = (tag, attributes, callback) => {

  const e = document.createElement(tag)

  if (attributes) {
    for (const a in attributes) {
      e.setAttribute(a, attributes[a])
    }
  }

  if (callback) {

    const returnValue = callback()

    switch (typeof returnValue) {

      /* they returned an element a list of elements */
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

export default el
