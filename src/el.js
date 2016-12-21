export const components = []

export default (tag = 'div', callback = {}, attributes = {}) => {

  const node = document.createElement(tag)

  switch (typeof callback) {

    case 'function': {

      const returnValue = callback()

      components.push({ tag, callback, attributes, node, returnValue })

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
      break
    }

    case 'object': {
      attributes = callback
    }
  }

  for (const a in attributes) {
    node.setAttribute(a, attributes[a])
  }

  document.body.appendChild(node)

  return node
}
