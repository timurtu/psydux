'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = exports.render = exports.el = undefined;

require('domali');

var _el = require('./el');

var _el2 = _interopRequireDefault(_el);

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by timur on 8/31/16.
 */

exports.el = _el2.default;
exports.render = _render2.default;
exports.route = _route2.default;