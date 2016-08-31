/**
 * Created by timur on 8/31/16.
 */

const psy = {}

psy.el = function(tag, attributes, callback) {
  
  const e = document.createElement(tag)
  
  for(const a in attributes) {
    e.setAttribute(a, attributes[a])
  }
  
  document.body.appendChild(element)
  
  return callback(element)
}

module.exports = psy
