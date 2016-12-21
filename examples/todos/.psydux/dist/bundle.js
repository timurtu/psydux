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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var container = function container() {
	  for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
	    elements[_key] = arguments[_key];
	  }

	  return (0, _psydux.el)('div', function () {
	    return elements;
	  }, { class: 'container-fluid' });
	};
	var title = function title(text) {
	  return (0, _psydux.el)('h1', function () {
	    return text;
	  });
	};
	var form = function form() {
	  for (var _len2 = arguments.length, elements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    elements[_key2] = arguments[_key2];
	  }

	  return (0, _psydux.el)('form', function () {
	    return elements;
	  });
	};
	var input = function input(placeholder) {
	  return (0, _psydux.el)('input', { placeholder: placeholder, class: 'form-control' });
	};
	var button = function button(_ref) {
	  var type = _ref.type,
	      text = _ref.text;
	  return (0, _psydux.el)('button', function () {
	    return text;
	  }, { class: 'btn btn-' + type + ' btn-block' });
	};
	var row = function row() {
	  for (var _len3 = arguments.length, elements = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    elements[_key3] = arguments[_key3];
	  }

	  return (0, _psydux.el)('div', function () {
	    return elements;
	  }, { class: 'row' });
	};
	var col = function col(amount, display) {
	  for (var _len4 = arguments.length, elements = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	    elements[_key4 - 2] = arguments[_key4];
	  }

	  return (0, _psydux.el)('div', function () {
	    return elements;
	  }, { class: 'col-' + display + '-' + amount });
	};

	var todoInput = input('Add Todo');

	var todoForm = form(row(col(8, 'xs', todoInput), col(4, 'xs', button({ type: 'success', text: 'Add' }))));

	_psydux.state.set({
	  todos: []
	});

	todoForm.onsubmit = function (e) {

	  e.preventDefault();

	  _psydux.state.set({
	    todos: [].concat(_toConsumableArray(_psydux.state.get().todos), [todoInput.value])
	  });

	  console.log('todos', _psydux.state.get().todos);

	  todoInput.value = '';
	};

	var todoList = function todoList(todos) {
	  return (0, _psydux.el)('ul', function () {
	    return todos.map(function (todo) {
	      return (0, _psydux.el)('li', function () {
	        return todo;
	      });
	    });
	  });
	};

	container(title('Todo List'), todoForm, todoList(_psydux.state.get().todos));

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

	var components = exports.components = [];

	exports.default = function () {
	  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


	  var node = document.createElement(tag);

	  components.push({ tag: tag, callback: callback, attributes: attributes });

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _el = __webpack_require__(2);

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

/***/ }
/******/ ]);