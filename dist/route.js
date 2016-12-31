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