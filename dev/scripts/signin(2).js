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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "  <!-- 头部 -->  <div class=\"header_whole\">    <header>            <div class=\"logo\">                <a href=\"shouye.html\">                    <img src=\"./images/logo.png\" alt=\"logo\">                </a>            </div>            <div class=\"head-center\">                <div class=\"search\">                    <input type=\"text\">                    <i class=\"iconfont\" id=\"searchBtn\">&#xe641;</i>                </div>                <div class=\"nav\">                    <ul>                        <li><a href=\"shouye.html\">首页</a></li>                        <li><a href=\"zonghepaixu.html\">课程选择</a></li>                        <li><a href=\"youxuanhaoke.html\">优选好课</a></li>                    </ul>                </div>             </div>            <div class=\"login-register\">                <a href=\"signin.html\"><span>登录</span></a>|                <a href=\"signup.html\"><span>注册</span></a>                <a href=\"personal.html\"><span>个人中心</span></a>             </div>    </header></div>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">    <div>            &copy;;2018 Search Beyond.cn             京ICP备11015476号 京公网安备11015013401号 京ICP证110318号    </div></div>"

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
const signinTpl = __webpack_require__(41)


const signinController = __webpack_require__(42)
  

$('#root').html(indexTpl)
$('.container').html(headerTpl + signinTpl)
$('.container').append(footerTpl)
 
signinController.signinCol()



/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">    <div class=\"login-center\">    <div class=\"welc\">    <div class=\"line\"></div>    <div class=\"login-title\">欢迎登陆弘毅智学网！</div>    <div class=\"line\"></div>    </div>    <div class=\"login-email\">    <input type=\"text\" name=\"email\" id=\"username\" placeholder=\"用户名\">    </div>    <div class=\"login-pwd\">    <input type=\"password\" name=\"pwd\" id=\"pwd\" placeholder=\"密码\">    </div>    <div class=\"forget\">    <div class=\"next\">    <input type=\"checkbox\" class=\"check\" >     </a><span>下次自动登陆</span>    </div>    <div class=\"forPwd\"><a href=\"findpwd.html\">忘记密码?</a></div>    </div>    <div class=\"loginBtn\">    <button id=\"login-btn\">登录</button>    <div class=\"noNumber\">    <p>还没账号？<a href=\"signup.html\"><span>立即注册</span></a></p >    </div>    </div>    </div>"

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

const signinModel = __webpack_require__(43)

const signinCol = () => {
        
    $('#login-btn').on('click', async () => {
                console.log(111)
                let { username, password} = {
                    username: $('#username').val(),
                    password: $('#pwd').val(),
                }
        let result = await signinModel.signinModel(JSON.stringify({ username, password}))
        if (result.code == 0) {
                    location.href="shouye.html"
        }
        if (result.code == -2) {
            alert("密码错误")
        }
        if (result.code == -1) {
            alert("用户名不存在")
        }
            })
        }
    


module.exports = {
    signinCol
}



/***/ }),

/***/ 43:
/***/ (function(module, exports) {

const signinModel = (data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/login',
            type: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            data,
            success: (result) => {
                resolve(result);
                console.log(1)
            },
            catch: (err) => {
                console.log("AJAX请求失败！")
            }
        })
    })
}
module.exports = {
    signinModel
}

/***/ })

/******/ });