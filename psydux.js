/**
 * Created by timur on 8/31/16.
 */

const dom = require('domali')

const psy = {}


psy.el = function(tag, attributes, callback) {
  
  const element = dom.create(tag)
  
  element.set(attributes)
  
  dom.render(element)
  
  return callback(element)
}

module.exports = psy
