export default (tag, attributes, callback) => {

  const node = document.createElement(tag)

  if (attributes) {
    for (const a in attributes) {
      node.setAttribute(a, attributes[a])
    }
  }

  if (callback) {

    const returnValue = callback()

    /*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
    switch (typeof returnValue) {

      case 'object':
        Array.isArray(returnValue) ? Array.prototype.forEach.call(returnValue, element => node.appendChild(element)) :
          node.appendChild(returnValue)
        break

      case 'string':
        node.appendChild(document.createTextNode(returnValue))
        break
    }
  }

  document.body.appendChild(node)
  return node
}
