'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (tag, attributes, callback) {

  var node = document.createElement(tag);

  if (attributes) {
    for (var a in attributes) {
      node.setAttribute(a, attributes[a]);
    }
  }

  if (callback) {

    var returnValue = callback();

    /*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
    switch (typeof returnValue === 'undefined' ? 'undefined' : _typeof(returnValue)) {

      case 'object':
        Array.isArray(returnValue) ? Array.prototype.forEach.call(returnValue, function (element) {
          return node.appendChild(element);
        }) : node.appendChild(returnValue);
        break;

      case 'string':
        node.appendChild(document.createTextNode(returnValue));
        break;
    }
  }

  document.body.appendChild(node);
  return node;
};