module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "#rootEle div{\n    min-height: 2em !important;\n  }", ""]);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_React$Component) {
    _inherits(InfiniteScroll, _React$Component);

    function InfiniteScroll() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InfiniteScroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            compoutedEle: [],
            rootEle: _react2.default.createRef(),
            elesize: 0
        }, _this.getNumFromStyle = function (numStr) {
            return Number(numStr.substring(0, numStr.length - 2));
        }, _this.adjustPaddings = function (isScrollDown) {
            var container = _this.state.rootEle;
            var currentPaddingTop = _this.getNumFromStyle(container.current.style.paddingTop);
            var currentPaddingBottom = _this.getNumFromStyle(container.current.style.paddingBottom);
            var remPaddingsVal = (_this.state.elesize - _this.state.elesize / 2.5) * ((_this.props.size || 10) / 2);
            if (isScrollDown) {
                container.current.style.paddingTop = currentPaddingTop + remPaddingsVal + "px";
                container.current.style.paddingBottom = currentPaddingBottom === 0 ? "0px" : currentPaddingBottom - remPaddingsVal + "px";
            } else {
                container.current.style.paddingBottom = currentPaddingBottom + remPaddingsVal + "px";
                container.current.style.paddingTop = currentPaddingTop === 0 ? "0px" : currentPaddingTop - remPaddingsVal + "px";
            }
        }, _this.topSentCallback = function (entry) {
            if (currentIndex === 0) {
                var container = document.querySelector("#firstObeserverEle");
                container.style.paddingTop = "0px";
                container.style.paddingBottom = "0px";
            }

            var currentY = entry.boundingClientRect.top;
            var currentRatio = entry.intersectionRatio;
            var isIntersecting = entry.isIntersecting;

            // conditional check for Scrolling up
            if (currentY > topSentinelPreviousY && isIntersecting && currentRatio >= topSentinelPreviousRatio && currentIndex !== 0) {
                var firstIndex = _this.getSlidingWindow(false);
                _this.adjustPaddings(false);
                _this.recycleDOM(firstIndex);
                currentIndex = firstIndex;
            }
            topSentinelPreviousY = currentY;
            topSentinelPreviousRatio = currentRatio;
        }, _this.getSlidingWindow = function (isScrollDown) {
            var increment = _this.props.size / 2;
            var firstIndex = void 0;

            if (isScrollDown) {
                firstIndex = currentIndex + increment;
            } else {
                firstIndex = currentIndex - increment;
            }

            if (firstIndex < 0) {
                firstIndex = 0;
            }

            return firstIndex;
        }, _this.botSentCallback = function (entry) {
            if (currentIndex === _this.props.data.length) {
                return;
            }
            var currentY = entry.boundingClientRect.top;
            var currentRatio = entry.intersectionRatio;
            var isIntersecting = entry.isIntersecting;

            // conditional check for Scrolling down
            if (currentY < bottomSentinelPreviousY && currentRatio > bottomSentinelPreviousRatio && isIntersecting) {
                var firstIndex = _this.getSlidingWindow(true);
                _this.adjustPaddings(true);
                _this.recycleDOM(firstIndex);
                currentIndex = firstIndex;
            }
            bottomSentinelPreviousY = currentY;
            bottomSentinelPreviousRatio = currentRatio;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfiniteScroll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.recycleDOM(0);
            this.firstTime = true;
        }
    }, {
        key: 'recycleDOM',
        value: function recycleDOM(firstIndex) {
            var arr = this.props.data.slice(firstIndex, firstIndex + (this.props.size || 10));
            this.setState({ compoutedEle: arr });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.firstTime) {
                this.initIntersectionObserver();
                this.setState({ elesize: document.querySelector("#firstObeserverEle").getClientRects()[0].height });
            }
            this.firstTime = false;
        }
    }, {
        key: 'initIntersectionObserver',
        value: function initIntersectionObserver() {
            var _this2 = this;

            var options = {};

            var callback = function callback(entries) {
                entries.forEach(function (entry) {
                    if (entry.target.id === 'firstObeserverEle') {
                        _this2.topSentCallback(entry);
                    } else if (entry.target.id === 'lastObeserverEle') {
                        _this2.botSentCallback(entry);
                    }
                });
            };
            var observer = new IntersectionObserver(callback, options);
            observer.observe(document.querySelector("#firstObeserverEle"));
            observer.observe(document.querySelector('#lastObeserverEle'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { ref: this.state.rootEle, id: 'rootEle' },
                this.state.compoutedEle.map(function (item, index) {
                    return _this3.setIdsInEle(item, index);
                })
            );
        }
    }, {
        key: 'setIdsInEle',
        value: function setIdsInEle(item, index) {
            if (index === 0) return _react2.default.createElement(
                'div',
                { id: 'firstObeserverEle', key: index },
                this.props.drawElement(item, index)
            );else if (index === (this.props.size - 1 || 9)) return _react2.default.createElement(
                'div',
                { id: 'lastObeserverEle', key: index },
                this.props.drawElement(item, index)
            );else return this.props.drawElement(item, index);
        }
    }]);

    return InfiniteScroll;
}(_react2.default.Component);

var topSentinelPreviousY = 0;
var topSentinelPreviousRatio = 0;
var bottomSentinelPreviousY = 0;
var bottomSentinelPreviousRatio = 0;
var currentIndex = 0;
exports.default = InfiniteScroll;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);