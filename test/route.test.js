/**
 * Created by timur on 12/28/16.
 */

import 'babel-polyfill'
import { el, route, render } from '../dist/psydux'

describe('route', function() {
  it('should only render a div at the index route', function() {

    const div = el('div')

    render(
      route('/', div)
    )

    var initialPage = location.pathname;
    location.replace('http://example.com/#' + initialPage);
    console.log(location)
    console.log(location.pathname)

    console.log(document.body.firstChild)

  })
})
