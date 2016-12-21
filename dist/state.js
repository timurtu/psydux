'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _el = require('./el');

var states = [{}]; /**
                    * Created by timur on 12/19/2016.
                    */

var count = 0;

function get() {
  return states[count];
}

function set(nextState) {
  states.push(nextState);
  count++;
  update(_el.components);
}

function update(components) {
  var foo = console;
  foo.log(components);
}

exports.default = {
  get: get, set: set
};