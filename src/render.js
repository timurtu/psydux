/**
 * Created by timur on 12/21/16.
 */

export default (...functions) => {

  const root = document.createElement('div')

  function* generator(items) {
    while(true) { // eslint-disable-line no-constant-condition
      yield items.forEach(item => {
        root.appendChild(item())
      })
    }
  }

  const gen = generator(functions)
  gen.next()

  document.body.insertBefore(root, document.body.firstChild)
}
