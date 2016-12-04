const el = (tag, attributes, callback) => {

  const e = document.createElement(tag)

  if (attributes) {
    for (const a in attributes) {
      e.setAttribute(a, attributes[a])
    }
  }

  if (callback) {

    const returnValue = callback()

    /*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
    switch (typeof returnValue) {
      case 'object':
        if (tag) {
          switch (tag) {
            default:
              Array.prototype.forEach.call(returnValue, element => e.appendChild(element))
          }
        }
        break
      case 'string':
      default:
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
