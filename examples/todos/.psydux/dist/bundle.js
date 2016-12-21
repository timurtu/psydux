/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _psydux = __webpack_require__(1);

	(0, _psydux.el)('div', function () {
	  return 'hey';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.state = exports.el = undefined;

	var _el = __webpack_require__(2);

	var _el2 = _interopRequireDefault(_el);

	var _state = __webpack_require__(3);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by timur on 8/31/16.
	 */

	exports.el = _el2.default;
	exports.state = _state2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	}

	exports.default = {
	  get: get, set: set
	};

/***/ }
/******/ ]);