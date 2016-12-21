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