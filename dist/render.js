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
            if (!true) {
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