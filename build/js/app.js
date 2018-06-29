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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar lines = [];\nvar linesNumber = 4;\n\nvar vertices = 100;\nvar color = '#ff0429';\n\nfor (var i = 0; i < vertices; i++) {\n  var point = {\n    x: Math.cos(i / vertices * Math.PI * 2),\n    y: Math.sin(i / vertices * Math.PI * 2)\n  };\n}\n\ndocument.body.appendChild(canvas);\n\nvar width = void 0,\n    height = void 0,\n    halfX = void 0,\n    halfY = void 0;\n\nsizing();\n\nfunction sizing() {\n  width = window.innerWidth;\n  height = window.innerHeight;\n\n  halfX = width / 2;\n  halfY = height / 2;\n\n  canvas.height = height;\n  canvas.width = width;\n}\n\nfunction update() {}\n\nfunction render() {}\n\nfunction raf() {\n\n  update();\n  render();\n\n  window.requestAnimationFrame(raf);\n}\n\nraf();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IGxpbmVzID0gW107XG5sZXQgbGluZXNOdW1iZXIgPSA0O1xuXG5sZXQgdmVydGljZXMgPSAxMDA7XG5sZXQgY29sb3IgPSAnI2ZmMDQyOSc7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXM7IGkrKykge1xuICBsZXQgcG9pbnQgPSB7XG4gICAgeDogTWF0aC5jb3MoaSAvIHZlcnRpY2VzICogTWF0aC5QSSAqIDIpLFxuICAgIHk6IE1hdGguc2luKGkgLyB2ZXJ0aWNlcyAqIE1hdGguUEkgKiAyKVxuICB9O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbmxldCB3aWR0aCwgaGVpZ2h0LCBoYWxmWCwgaGFsZlk7XG5cbnNpemluZygpO1xuXG5mdW5jdGlvbiBzaXppbmcoKSB7XG4gIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICBoYWxmWCA9IHdpZHRoIC8gMjtcbiAgaGFsZlkgPSBoZWlnaHQgLyAyO1xuXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24gcmFmKCkge1xuXG4gIHVwZGF0ZSgpO1xuICByZW5kZXIoKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZik7XG59XG5cbnJhZigpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });