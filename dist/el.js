'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  var node = document.createElement(tag);

  switch (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) {

    case 'function':
      {

        var returnValue = callback();

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
        break;
      }

    case 'object':
      {
        attributes = callback;
      }
  }

  for (var a in attributes) {
    node.setAttribute(a, attributes[a]);
  }

  document.body.appendChild(node);
  return node;
};