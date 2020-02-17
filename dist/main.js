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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alert-box/alert-box.js":
/*!************************************!*\
  !*** ./src/alert-box/alert-box.js ***!
  \************************************/
/*! exports provided: AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertBox\", function() { return AlertBox; });\n/**\n* This format uses the ES2015/ES6 class.\n* You define an export before 'class' and you then import\n* it by referencing the path of this file and then referring it\n* with curly braces:\n*\n* import { AlertBox } from './alert-box/alert-box;\n* Note that AlertBox is the same name as your class!\n*\n*/\nclass AlertBox {\n  sayHi() {\n    alert(\"Hello 😊\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/alert-box/alert-box.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-box/alert-box */ \"./src/alert-box/alert-box.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-text/write-text */ \"./src/write-text/write-text.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_write_text_write_text__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Since it's a class, we need to instantiate it before we can use it.\nconst alertUser = new _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__[\"AlertBox\"]();\ndocument.addEventListener('DOMContentLoaded', () => {\n  const alertButton = document.getElementById('js-button');\n  alertButton.addEventListener('click', alertUser.sayHi);\n  const pTagButton = document.getElementById('js-write-text-button');\n  const pTag = document.querySelector('p');\n  /**\n  * This is another variation. We create an anonymous function (Search more about it online)\n  * and we call the function.\n  */\n  pTagButton.addEventListener('click', () => {\n    _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default()(pTag)\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/write-text/write-text.js":
/*!**************************************!*\
  !*** ./src/write-text/write-text.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * We pass the actual <p></p> tag by searching it with\n * document.querySelector\n * @param {} p\n */\nmodule.exports = (p) => {\n   p.innerHTML = 'Hello! From hidden text ';\n}\n\n\n//# sourceURL=webpack:///./src/write-text/write-text.js?");

/***/ })

/******/ });