'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by timur on 12/21/16.
 */

exports.default = function () {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var root = document.createElement('div');

  functions.forEach(function (fn) {

    switch (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) {

      case 'function':
        {
          root.appendChild(fn());
          break;
        }

      case 'object':
        {
          root.appendChild(fn);
          break;
        }
    }
  });

  document.body.insertBefore(root, document.body.firstChild);
};