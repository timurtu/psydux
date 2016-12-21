import { el } from '../dist/psydux'

describe('el', function () {

  describe('tag', function () {

    it('Should be a header', function () {

      expect(el('h1').outerHTML).to.equal('<h1></h1>')
    })

    it('Should be a paragraph', function () {

      expect(el('p').outerHTML).to.equal('<p></p>')
    })

    it('Should be an image', function () {

      expect(el('img').outerHTML).to.equal('<img>')
    })
  })

  describe('attributes', function () {

    it('Should set an id attribute', function () {

      expect(el('h1', () => {}, { id: 'foo' }).getAttribute('id')).to.equal('foo')
    })

    it('Should set a few attributes', function () {

      const img = el('img', {
        height: 420,
        width: 350,
        class: 'image'
      })

      expect(img.getAttribute('height')).to.equal('420')
      expect(img.getAttribute('width')).to.equal('350')
      expect(img.getAttribute('class')).to.equal('image')
    })
  })

  describe('callback', function () {

    it('Should set a header\'s text', function () {

      const txt = 'hey'

      expect(el('h1', () => txt, {}).innerHTML).to.equal(txt)
    })

    it('Should set a paragraph\'s text', function () {

      const txt = 'hello, world!'

      expect(el('p', {}, () => txt).innerHTML).to.equal(txt)
    })

    it('Should set a list of lis', function () {

      const lis = '<li></li><li></li><li></li>'

      expect(el('ul', {}, () => [
        el('li'),
        el('li'),
        el('li')
      ]).innerHTML).to.equal(lis)
    })
  })
})
