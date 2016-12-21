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

	__webpack_require__(1);

	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _psydux = __webpack_require__(2);

	describe('el', function () {

	  describe('tag', function () {

	    it('Should be a div', function () {

	      expect((0, _psydux.el)().outerHTML).to.equal('<div></div>');
	    });

	    it('Should be an h1', function () {

	      expect((0, _psydux.el)('h1').outerHTML).to.equal('<h1></h1>');
	    });

	    it('Should be a paragraph', function () {

	      expect((0, _psydux.el)('p').outerHTML).to.equal('<p></p>');
	    });

	    it('Should be an image', function () {

	      expect((0, _psydux.el)('img').outerHTML).to.equal('<img>');
	    });
	  });

	  describe('attributes', function () {

	    it('Should set an id attribute', function () {

	      expect((0, _psydux.el)('h1', { id: 'foo' }).getAttribute('id')).to.equal('foo');
	    });

	    it('Should set a few attributes', function () {

	      var img = (0, _psydux.el)('img', {
	        height: 420,
	        width: 350,
	        class: 'image'
	      });

	      expect(img.getAttribute('height')).to.equal('420');
	      expect(img.getAttribute('width')).to.equal('350');
	      expect(img.getAttribute('class')).to.equal('image');
	    });
	  });

	  describe('callback', function () {

	    it('Should set a header\'s text', function () {

	      var txt = 'hey';

	      expect((0, _psydux.el)('h1', function () {
	        return txt;
	      }).innerHTML).to.equal(txt);
	    });

	    it('Should set a paragraph\'s text', function () {

	      var txt = 'hello, world!';

	      expect((0, _psydux.el)('p', function () {
	        return txt;
	      }).innerHTML).to.equal(txt);
	    });

	    it('Should set a child element', function () {

	      expect((0, _psydux.el)('ul', function () {
	        return (0, _psydux.el)('li');
	      }).outerHTML).to.equal('<ul><li></li></ul>');
	    });

	    it('Should set a list of lis', function () {

	      var lis = '<li></li><li></li><li></li>';

	      expect((0, _psydux.el)('ul', function () {
	        return [(0, _psydux.el)('li'), (0, _psydux.el)('li'), (0, _psydux.el)('li')];
	      }).innerHTML).to.equal(lis);
	    });
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.state = exports.el = undefined;

	var _el = __webpack_require__(3);

	var _el2 = _interopRequireDefault(_el);

	var _state = __webpack_require__(4);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by timur on 8/31/16.
	 */

	exports.el = _el2.default;
	exports.state = _state2.default;

/***/ },
/* 3 */
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
	              components.push({ tag: tag, callback: callback, attributes: attributes, node: node, returnValue: returnValue });
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by timur on 12/19/2016.
	                                                                                                                                                                                                                                                                               */

	var _el = __webpack_require__(3);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _psydux = __webpack_require__(2);

	describe('state', function () {

	  describe('get', function () {

	    it('should return an object', function () {
	      expect(_psydux.state.get()).to.be.an('object');
	    });

	    it('should be empty without setting state', function () {
	      expect(_psydux.state.get()).to.be.empty;
	    });
	  });

	  describe('set', function () {

	    it('should set a value', function () {
	      _psydux.state.set({ name: 'Timur' });
	      expect(_psydux.state.get()).to.deep.equal({ name: 'Timur' });
	    });

	    it('should set a new value', function () {
	      _psydux.state.set({ name: 'Timur' });
	      expect(_psydux.state.get()).to.deep.equal({ name: 'Timur' });
	      _psydux.state.set({ name: 'Uzel' });
	      expect(_psydux.state.get()).to.deep.equal({ name: 'Uzel' });
	    });
	  });
	}); /**
	     * Created by timur on 12/19/2016.
	     */

/***/ }
/******/ ]);