'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domali = require('domali');

var _domali2 = _interopRequireDefault(_domali);

var _el = require('./el');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by timur on 12/19/2016.
 */

var states = [{}];
var count = 0;

function get() {
  return states[count];
}

function set(nextState) {
  states.push(nextState);
  count++;
  if (_el.components) {
    update(_el.components);
  }
}

function update(components) {

  components.forEach(function (comp) {
    return _domali2.default.render(comp.node);
  });
}

exports.default = {
  get: get, set: set
};