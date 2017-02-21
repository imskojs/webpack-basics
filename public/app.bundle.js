webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var window = {};

/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
'use strict';
window.leftPad = leftPad;

var cache = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        ', '         '];

function leftPad(str, len, ch) {
  // convert `str` to `string`
  str = str + '';
  // `len` is the `pad`'s length now
  len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '`
  if (!ch && ch !== 0) ch = ' ';
  // convert `ch` to `string`
  ch = ch + '';
  // cache common use cases
  if (ch === ' ' && len < 10) return cache[len] + str;
  // `pad` starts with an empty string
  var pad = '';
  // loop
  while (true) {
    // add `ch` to `pad` if `len` is odd
    if (len & 1) pad += ch;
    // divide `len` by 2, ditch the remainder
    len >>= 1;
    // "double" the `ch` so this operation count grows logarithmically on `len`
    // each time `ch` is "doubled", the `len` would need to be "doubled" too
    // similar to finding a value in binary search tree, hence O(log(n))
    if (len) ch += ch;
    // `len` is 0, exit the loop
    else break;
  }
  // pad `str`!
  return pad + str;
}

/*** EXPORTS FROM exports-loader ***/
module.exports = leftPad;

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export test */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// app.sub1.js

console.log('app.sub1.js');
var test =
// this will be tree shaked as it is not being used anywhere
function test() {
  _classCallCheck(this, test);

  console.log('test');
};

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// app.sub2.js

console.log('app.sub2.js');

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__non_node_modules_left_pad__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__non_node_modules_left_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__non_node_modules_left_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_sub1_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_sub2_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_sub2_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_sub2_js__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Check this out in public/byProductOfRequiredConfigProperties.js





var text = document.createTextNode(' This is appended by JavaScript');
document.querySelector('h1').appendChild(text);

var TestingBabel = function TestingBabel() {
  _classCallCheck(this, TestingBabel);

  console.log(__WEBPACK_IMPORTED_MODULE_0_moment___default()().format());
};

var test = new TestingBabel();

/***/ })

},[114]);