/**
 * Created by timur on 12/21/16.
 */

import { el, render } from '../dist/psydux'

describe('render', function () {

  beforeEach(() => {
    document.body.removeChild(document.body.firstChild)
  })

  it('should render a div to the dom', function () {

    const div = () => el('div')

    render(div)

    expect(document.body.firstChild.outerHTML).to.equal('<div><div></div></div>')
  })

  it('should render 2 paragraphs to the dom', function () {

    const p = () => el('p')

    render(p, p)

    expect(document.body.firstChild.outerHTML).to.equal('<div><p></p><p></p></div>')
  })

  it('should render a nested li', function () {

    const list = (...items) => el('ul', () => items.map(item => el('li', () => item)))

    render(list('nested', 'content'))

    expect(document.body.firstChild.outerHTML).to.equal('<div><ul><li>nested</li><li>content</li></ul></div>')
  })

})
