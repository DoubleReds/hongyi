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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "  <!-- 头部 -->  <div class=\"header_whole\">    <header>            <div class=\"logo\">                <a href=\"shouye.html\">                    <img src=\"./images/logo.png\" alt=\"logo\">                </a>            </div>            <div class=\"head-center\">                <div class=\"search\">                    <input type=\"text\">                    <i class=\"iconfont\">&#xe641;</i>                </div>                <div class=\"nav\">                    <ul>                        <li><a href=\"shouye.html\">首页</a></li>                        <li><a href=\"zonghepaixu.html\">课程选择</a></li>                        <li><a href=\"youxuanhaoke.html\">优选好课</a></li>                    </ul>                </div>             </div>            <div class=\"login-register\">                <a href=\"login.html\"><span>登录</span></a>|                <a href=\"register\"><span>注册</span></a>                <a href=\"personal.html\"><span>个人中心</span></a>             </div>    </header></div>"

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)

const shipinbofangTpl = __webpack_require__(28)


$('#root').html(indexTpl)
$('.container').html(headerTpl + shipinbofangTpl)




/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "<div class=\"xid\">     <video width=\"800\" height=\"400\">        <source src=\"ftp://10.9.164.100/20180625/20180625-Node.js-项目-删除.mov\" type=\"video/mov\"></source>    </video></div><div class=\"daf\">    <span>打分：<span></span></span></div>"

/***/ })

/******/ });