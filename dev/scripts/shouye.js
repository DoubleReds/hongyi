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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">    <div>            &copy;;2018 Search Beyond.cn             京ICP备11015476号 京公网安备11015013401号 京ICP证110318号    </div></div>"

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)
const footerTpl = __webpack_require__(2)

const shouyeTpl = __webpack_require__(38)


$('#root').html(indexTpl)
$('.container').html(headerTpl + shouyeTpl +footerTpl)




/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">    <div class=\"swiper\">        <a href=\"#\"><img src=\"./styles/images/sx5.jpg\" alt=\"123\"></a>    </div></div><div class=\"course\">    <!-- course -->    <div class=\"courseBody\">        <div class=\"courseTitle\">            <div class=\"tit-top\">                <div class=\"line\"></div>                <div>course</div>                <div class=\"line\"></div>            </div>            <p>提供多种视觉设计课程，等你来选</p>                       </div>        <ul>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">            </a></li>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">            </a></li>            <li><a href=\"#\">                  <img src=\"\" alt=\"123\">            </a></li>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">            </a></li>        </ul>    </div></div><!-- characteristic --><div class=\"characteristic\">    <div class=\"character\">        <div class=\"courseTitle\">            <div class=\"tit-top\">                <div class=\"line\"></div>                <div>Characteristic</div>                <div class=\"line\"></div>            </div>            <p>专业才是硬道理，20万学员的智慧之选</p>                       </div>        <ul>            <li><a href=\"#\">                <img src=\"./styles/images/sx12.png\" alt=\"123\">                <div class=\"characDesc\">                    <p>零基础</p>                    <p>平台内所有课程通俗易懂</p>                    <p>有视频、图文、学习方式多样</p>                </div>            </a></li>            <li><a href=\"#\">                    <img src=\"./styles/images/sx15.png\" alt=\"123\">                    <div class=\"characDesc\">                            <p>无门槛</p>                            <p>不限学历、不限专业</p>                            <p>只要你点开就能轻松学习</p>                    </div>            </a></li>            <li><a href=\"#\">                    <img src=\"./styles/images/sx11.png\" alt=\"123\">                    <div class=\"characDesc\">                            <p>阶梯式教学</p>                            <p>由浅入深、由简到难</p>                            <p>根据自身知识面、对症下药</p>                    </div>            </a></li>            <li><a href=\"#\">                    <img src=\"./styles/images/sx16.png\" alt=\"123\">                    <div class=\"characDesc\">                            <p>一对一效果跟踪</p>                            <p>不懂、不会、不清楚</p>                            <p>不要怕、平台专人解答</p>                    </div>            </a></li>        </ul>    </div> </div><!-- exhibition --><div class=\"exhibition\">    <div class=\"exhibite\">        <div class=\"courseTitle\">            <div class=\"tit-top\">                <div class=\"line\"></div>                <div>exhibition</div>                <div class=\"line\"></div>            </div>            <p>设计源于生活，高于生活</p>                       </div>        <ul>            <li><a href=\"#\">                <img src=\"./styles/images/sx13.png\" alt=\"123\">                <div><p>平面设计</p></div>            </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/sx14.png\" alt=\"123\">                <div><p>海报设计</p></div>                                </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/circle.png\" alt=\"123\">                <div><p>字体设计</p></div>                                </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/cha.png\" alt=\"123\">                <div><p>插画设计</p></div>                                </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/circle.png\" alt=\"123\">                <div><p>3D设计</p></div>            </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/sx2.png\" alt=\"123\">                <div><p>2.5插画</p></div>            </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/sx9.png\" alt=\"123\">                <div><p>图像合成</p></div>            </a></li>            <li><a href=\"#\">                <img src=\"./styles/images/sx10.png\" alt=\"123\">                <div><p>图像精修</p></div>            </a></li>        </ul>      </div> </div><!-- quotation --><div class=\"quotation\">    <div class=\"quota\">        <div class=\"courseTitle\">            <div class=\"tit-top\">                <div class=\"line\"></div>                <div>quotation</div>                <div class=\"line\"></div>            </div>            <p>大师语录，点亮你的心灵</p>                       </div>        <ul>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">                <!-- <div><p>平面设计</p></div> -->            </a></li>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">                <!-- <div><p>海报设计</p></div>                     -->            </a></li>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">                <!-- <div><p>字体设计</p></div>                     -->            </a></li>            <li><a href=\"#\">                <img src=\"\" alt=\"123\">                <div><p>插画设计</p></div>                                </a></li>        </ul>      </div></div>"

/***/ })

/******/ });