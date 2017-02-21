webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// app.sub1.js

console.log('app.sub1.js');

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// app.sub2.js

console.log('app.sub2.js');

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _appSub = __webpack_require__(109);

var _appSub2 = _interopRequireDefault(_appSub);

var _appSub3 = __webpack_require__(110);

var _appSub4 = _interopRequireDefault(_appSub3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Check this out in public/byProductOfRequiredConfigProperties.js


var text = document.createTextNode(' This is appended by JavaScript');
document.querySelector('h1').appendChild(text);

var TestingBabel = function TestingBabel() {
  _classCallCheck(this, TestingBabel);

  console.log((0, _moment2.default)().format());
};

var test = new TestingBabel();

/***/ })

},[113]);