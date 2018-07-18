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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)

const zonghepaixu_mainTpl = __webpack_require__(26)



$('#root').html(indexTpl)
$('.container').html(headerTpl + zonghepaixu_mainTpl)



/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav1\">    <span>课程类型:</span>    <span>全部</span>    <span>|</span>    <i>软件入门</i>    <span>|</span>    <i>设计技巧</i></div><!-- <div class=\"\"></div> --><div class=\"zong\">    <h2>            <span>综合排序</span>            <span>热门</span>    </h2>    <div class=\"zong_main\">        <ul>            <li>                <div class=\"zong_main_left\">                    <img src=\"\" alt=\"\">                </div>                <div class=\"zong_main_right\">                    <div class=\"top\">                        <span>软件入门</span>                        <span>课程评分:<i>4.5</i>分</span>                    </div>                    <div class=\"desc\">                        看电视看剧进度付款大幅扩大开放咖啡店蒂斯卡拉德里克                    </div>                </div>            </li>            <li>                <div class=\"zong_main_left\">                    <img src=\"\" alt=\"\">                </div>                <div class=\"zong_main_right\">                    <div class=\"top\">                        <span>软件入门</span>                        <span>课程评分:<i>4.5</i>分</span>                    </div>                    <div class=\"desc\">                        看电视看剧进度付款大幅扩大开放咖啡店蒂斯卡拉德里克                    </div>                </div>            </li>        </ul>    </div></div><div class=\"footer1\">    <a href=\"\">首页</a>    <a href=\"\">上页</a>    <a href=\"\">1</a>    <a href=\"\">2</a>    <a href=\"\">3</a>    <a href=\"\">4</a>    <a href=\"\">...</a>    <a href=\"\">下页</a>    <a href=\"\">尾页</a></div>"

/***/ })

/******/ });