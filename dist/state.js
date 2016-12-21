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
    var tag = _ref.tag,
        returnValue = _ref.returnValue,
        callback = _ref.callback,
        node = _ref.node;


    var nextValue = callback();

    if (returnValue !== nextValue) {
      (function () {

        var nextNode = document.createElement(tag);

        switch (typeof returnValue === 'undefined' ? 'undefined' : _typeof(returnValue)) {

          case 'object':
            {
              Array.isArray(nextValue) ? Array.prototype.forEach.call(nextValue, function (element) {
                return nextNode.appendChild(element);
              }) : node.appendChild(nextValue);
              break;
            }

          case 'string':
            {
              nextNode.appendChild(document.createTextNode(nextValue));
              break;
            }
        }
      })();
    }
  });
}

exports.default = {
  get: get, set: set
};