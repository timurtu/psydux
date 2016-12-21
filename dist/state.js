'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by timur on 12/19/2016.
                                                                                                                                                                                                                                                                               */

var _el = require('./el');

var states = [{}];
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
  components.forEach(function (component) {

    switch (_typeof(component.returnValue)) {

      case 'string':
        {
          component.node.appendChild(document.createTextNode(component.callback()));
          break;
        }
    }
  });
}

exports.default = {
  get: get, set: set
};