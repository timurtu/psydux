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
  components.forEach(function (_ref) {
    var returnValue = _ref.returnValue,
        node = _ref.node;


    switch (typeof returnValue === 'undefined' ? 'undefined' : _typeof(returnValue)) {

      case 'object':
        {
          Array.isArray(returnValue) ? Array.prototype.forEach.call(returnValue, function (element) {
            return node.appendChild(element);
          }) : node.appendChild(returnValue);
          break;
        }

      case 'string':
        {
          node.appendChild(document.createTextNode(returnValue));
          break;
        }
    }
  });
}

exports.default = {
  get: get, set: set
};