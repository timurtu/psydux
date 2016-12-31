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

	var container = function container() {
	  for (var _len = arguments.length, els = Array(_len), _key = 0; _key < _len; _key++) {
	    els[_key] = arguments[_key];
	  }

	  return (0, _psydux.el)('div', function () {
	    return els;
	  }, { class: 'container' });
	};

	var link = function link(href) {
	  return (0, _psydux.el)('a', function () {
	    return href;
	  }, { href: href, style: 'margin: .5em' });
	};

	var h1 = function h1(text) {
	  return (0, _psydux.el)('h1', function () {
	    return text;
	  });
	};

	var p = function p(text) {
	  return (0, _psydux.el)('p', function () {
	    return text;
	  });
	};

	var nav = container(link('/'), link('home'), link('profile'));

	var index = container(h1('Index'));

	var home = container(h1('Home'), p('Home page text'));

	var profile = container(h1('Profile'), p('Profile page text'));

	(0, _psydux.render)(nav, (0, _psydux.route)('/', index), (0, _psydux.route)('/home', home), (0, _psydux.route)('/profile', profile));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.route = exports.render = exports.state = exports.el = undefined;

	__webpack_require__(2);

	var _el = __webpack_require__(9);

	var _el2 = _interopRequireDefault(_el);

	var _state = __webpack_require__(10);

	var _state2 = _interopRequireDefault(_state);

	var _render = __webpack_require__(11);

	var _render2 = _interopRequireDefault(_render);

	var _route = __webpack_require__(12);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.el = _el2.default;
	exports.state = _state2.default;
	exports.render = _render2.default;
	exports.route = _route2.default; /**
	                                  * Created by timur on 8/31/16.
	                                  */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _get = __webpack_require__(3);

	var _select = __webpack_require__(4);

	var _create = __webpack_require__(5);

	var _render = __webpack_require__(6);

	var _node = __webpack_require__(7);

	__webpack_require__(8);

	/**
	 * Created by timur on 4/27/16.
	 */

	exports.default = {

	  getId: _get.getId,
	  create: _create.create,
	  getClass: _get.getClass,
	  getTags: _get.getTags,
	  select: _select.select,
	  selectAll: _select.selectAll,
	  render: _render.render,
	  clear: _render.clear,
	  clone: _node.clone
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by timur on 5/22/16.
	 */

	/**
	 * Return one or many elements by getting them by id.
	 *
	 * @param ids Any number of id strings
	 * @returns elements as an array
	 */
	var getId = exports.getId = function getId() {
	  for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
	    ids[_key] = arguments[_key];
	  }

	  return ids.length > 1 ? ids.map(function (id) {
	    return document.getElementById(id);
	  }) : document.getElementById(ids[0]);
	};

	var getClass = exports.getClass = function getClass(className) {
	  return document.getElementsByClassName(className);
	};
	var getTags = exports.getTags = function getTags(tagName) {
	  return document.getElementsByTagName(tagName);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by timur on 7/24/16.
	 */

	var select = exports.select = function select(query) {
	  return document.querySelector(query);
	};
	var selectAll = exports.selectAll = function selectAll(query) {
	  return document.querySelectorAll(query);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by timur on 7/24/16.
	 */

	/**
	 * Return one or many elements created with their tagname
	 *
	 * @param elements Any number of element tag strings
	 * @returns elements as an array
	 */
	var create = exports.create = function create() {
	  for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
	    elements[_key] = arguments[_key];
	  }

	  var domNodes = elements.map(function (el) {
	    return document.createElement(el);
	  });
	  return domNodes.length > 1 ? domNodes : domNodes[0];
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by timur on 5/24/16.
	 */

	var render = exports.render = function render(element) {
	  return document.body.appendChild(element);
	};
	var clear = exports.clear = function clear() {
	  return document.removeChild(document.documentElement);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by timur on 5/24/16.
	 */

	var clone = exports.clone = function clone(node) {
	  return node.cloneNode(true);
	};

	Node.prototype.set = function (props) {
	  for (var key in props) {
	    this.setAttribute(key, props[key]);
	  }
	  return this;
	};

	Node.prototype.get = function () {
	  var _this = this;

	  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	    keys[_key] = arguments[_key];
	  }

	  if (keys.length === 1) {
	    return this.getAttribute(keys[0]);
	  }

	  return keys.map(function (key) {
	    return _this.getAttribute(key);
	  });
	};

	Node.prototype.text = function (msg) {

	  this.textContent = msg;
	  return this;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Created by timur on 8/17/16.
	 */

	Node.prototype.push = function (child) {

	  this.appendChild(child);

	  return this;
	};

	Node.prototype.unshift = function (child) {

	  this.insertBefore(child, this.firstChild);

	  return this;
	};

	Node.prototype.map = function (callback) {
	  var _this = this;

	  if (this.hasChildNodes()) {
	    var _ret = function () {

	      var newNode = _this.cloneNode(true);

	      Array.prototype.map.call(newNode.childNodes, function (node) {
	        return newNode.replaceChild(callback(node), node);
	      });

	      return {
	        v: newNode
	      };
	    }();

	    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

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

	  return node;
	};

/***/ },
/* 10 */
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

/***/ },
/* 11 */
/***/ function(module, exports) {

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

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by timur on 12/28/16.
	 */

	exports.default = function (path, element) {

	  if (location.pathname === path) {
	    return element;
	  }
	};

/***/ }
/******/ ]);