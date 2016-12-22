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

	__webpack_require__(6);

	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _psydux = __webpack_require__(2);

	describe('el', function () {

	  describe('tag', function () {

	    it('Should be a div', function () {

	      expect((0, _psydux.el)()().outerHTML).to.equal('<div></div>');
	    });

	    it('Should be an h1', function () {

	      expect((0, _psydux.el)('h1')().outerHTML).to.equal('<h1></h1>');
	    });

	    it('Should be a paragraph', function () {

	      expect((0, _psydux.el)('p')().outerHTML).to.equal('<p></p>');
	    });

	    it('Should be an image', function () {

	      expect((0, _psydux.el)('img')().outerHTML).to.equal('<img>');
	    });
	  });

	  describe('attributes', function () {

	    it('Should set an id attribute', function () {

	      expect((0, _psydux.el)('h1', { id: 'foo' })().getAttribute('id')).to.equal('foo');
	    });

	    it('Should set a few attributes', function () {

	      var img = (0, _psydux.el)('img', {
	        height: 420,
	        width: 350,
	        class: 'image'
	      })();

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
	      })().innerHTML).to.equal(txt);
	    });

	    it('Should set a paragraph\'s text', function () {

	      var txt = 'hello, world!';

	      expect((0, _psydux.el)('p', function () {
	        return txt;
	      })().innerHTML).to.equal(txt);
	    });

	    it('Should set a child element', function () {

	      expect((0, _psydux.el)('ul', function () {
	        return (0, _psydux.el)('li')();
	      })().outerHTML).to.equal('<ul><li></li></ul>');
	    });

	    it('Should set a list of lis', function () {

	      var lis = '<li></li><li></li><li></li>';

	      expect((0, _psydux.el)('ul', function () {
	        return [(0, _psydux.el)('li')(), (0, _psydux.el)('li')(), (0, _psydux.el)('li')()];
	      })().innerHTML).to.equal(lis);
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
	exports.render = exports.state = exports.el = undefined;

	var _el = __webpack_require__(3);

	var _el2 = _interopRequireDefault(_el);

	var _state = __webpack_require__(4);

	var _state2 = _interopRequireDefault(_state);

	var _render = __webpack_require__(5);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.el = _el2.default;
	exports.state = _state2.default;
	exports.render = _render2.default; /**
	                                    * Created by timur on 8/31/16.
	                                    */

/***/ },
/* 3 */
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
	  return function () {

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
	};

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by timur on 12/21/16.
	 */

	exports.default = function () {
	  var _marked = [generator].map(regeneratorRuntime.mark);

	  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
	    functions[_key] = arguments[_key];
	  }

	  var root = document.createElement('div');

	  function generator(items) {
	    return regeneratorRuntime.wrap(function generator$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (false) {
	              _context.next = 5;
	              break;
	            }

	            _context.next = 3;
	            return items.forEach(function (item) {
	              root.appendChild(item());
	            });

	          case 3:
	            _context.next = 0;
	            break;

	          case 5:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _marked[0], this);
	  }

	  var gen = generator(functions);
	  gen.next();

	  document.body.insertBefore(root, document.body.firstChild);
	};

/***/ },
/* 6 */
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _psydux = __webpack_require__(2);

	describe('render', function () {

	  beforeEach(function () {
	    document.body.removeChild(document.body.firstChild);
	  });

	  it('should render a div to the dom', function () {

	    (0, _psydux.render)((0, _psydux.el)('div'));

	    expect(document.body.firstChild.outerHTML).to.equal('<div><div></div></div>');
	  });

	  it('should render 2 paragraphs to the dom', function () {

	    var p = function p() {
	      return (0, _psydux.el)('p');
	    };

	    (0, _psydux.render)(p(), p());

	    expect(document.body.firstChild.outerHTML).to.equal('<div><p></p><p></p></div>');
	  });
	}); /**
	     * Created by timur on 12/21/16.
	     */

/***/ }
/******/ ]);