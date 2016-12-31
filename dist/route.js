'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by timur on 12/28/16.
 */

exports.default = function (path, el) {

  var dynamicRoutes = path.split(':');
  var locationRoutes = location.pathname.split(':');

  switch (dynamicRoutes.length) {

    case 1:
      {
        if (location.pathname === path) {
          return el;
        }
        break;
      }

    case 2:
      {
        if (dynamicRoutes[0] === locationRoutes[0]) {
          return el(locationRoutes[1]);
        }
        break;
      }
  }
};