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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//  const goumai = require('./views/goumai.html')
const zhifu = __webpack_require__(1)
//const zhifusucc = require('./views/zhifusucc.html')

// document.body.innerHTML = goumai;
document.body.innerHTML = zhifu;
// document.body.innerHTML = zhifusucc;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html lang=\"en\"><head>    <meta charset=\"UTF-8\">    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">    <title>支付页</title></head><body>        <div class=\"container\">                       <!-- 头部 -->                <div class=\"header_whole\">                        <header>                                <div class=\"logo\">                                    <img src=\"./images/logo.png\" alt=\"logo\">                                </div>                                <div class=\"head-center\">                                    <div class=\"search\">                                        <input type=\"text\" class=\"iconfont\">                                        <i class=\"iconfont\">&#xe641;</i>                                    </div>                                    <div class=\"nav\">                                        <ul>                                            <li><a href=\"#\">首页</a></li>                                            <li><a href=\"#\">课程选择</a></li>                                            <li><a href=\"#\">优选好课</a></li>                                        </ul>                                    </div>                                 </div>                                <div class=\"login-register\">                                    <span>登录</span>|<span>注册</span><span>个人中心</span>                                </div>                        </header>                </div>                               <!-- 主体 -->                <div class=\"main_whole\">                        <div class=\"main\">                            <div class=\"main1\">                                <div class=\"title\">                                    <p class=\"title1\">ps教程</p>                                    <p class=\"title2\">主讲人：额滴神</p>                                </div>                                <div class=\"desc\">接口：描述</div>                            </div>                        </div>                        <div class=\"main2\">                            <p class=\"desc1\">支付方式:</p>                            <input type=\"radio\" class=\"weixin\" name=\"zd\">微信支付<br>                            <input type=\"radio\" class=\"zfb\" name=\"zd\">支付宝支付                        </div>                        <div class=\"main3\">                                <input type=\"submit\" class=\"btn\" value=\"确认支付\">                        </div>                                       </div>        </div>    </body></html>"

/***/ })
/******/ ]);