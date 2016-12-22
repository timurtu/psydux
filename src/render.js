/**
 * Created by timur on 12/21/16.
 */

export default (...functions) => {

  const root = document.createElement('div')

  functions.forEach(fn => {

    switch(typeof fn) {

      case 'function': {
        root.appendChild(fn())
        break
      }

      case 'object': {
        root.appendChild(fn)
        break
      }
    }
  })

  document.body.insertBefore(root, document.body.firstChild)
}
