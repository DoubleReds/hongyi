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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
const signupTpl = __webpack_require__(45)
const signupController = __webpack_require__(46)

$('#root').html(indexTpl)
$('.container').html(headerTpl + signupTpl)
$('.container').append(footerTpl)

signupController.signupCol()



/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">    <div class=\"login-center\">        <div class=\"welc\">            <div class=\"line\"></div>            <div class=\"login-title\">欢迎注册弘毅智学网！</div>            <div class=\"line\"></div>        </div>        <div class=\"login-user\">            <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"请输入用户名\">        </div>        <div class=\"login-pwd\">                <input type=\"text\" name=\"pwd\" id=\"pwd\" placeholder=\"密码\">        </div>        <div class=\"login-phone\">            <input type=\"text\" name=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"请输入手机号\">        </div>        <div class=\"login-email\">            <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"请输入邮箱\">        </div>                      <div class=\"registerBtn\">            <button id=\"register-btn\">注册</button>        <div class=\"noNumber\">            <p>已有账号？<a href=\"signin.html\"><span>立即登录</span></a> </p>        </div>    </div></div>"

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

const signupModel = __webpack_require__(47)

const signupCol = () => {
        
    $('#register-btn').on('click', async () => {
                console.log(111)
                let { username, password,phone,email } = {
                    username: $('#username').val(),
                    password: $('#pwd').val(),
                    phone: $("#phoneNumber").val(),
                    email: $("#email").val()
                }
                let result = await signupModel.signupModel(JSON.stringify({ username, password, phone, email }))
                if (result.code == 0) {
                                    location.href="/signin.html"
                        }
                        if (result.code == -1) {
                            alert("用户名已存在")
                        }
                        
                    $('#username').val(''),
                    $('#pwd').val(''),
                    $("#phoneNumber").val(''),
                    $("#email").val('')
        })
        }
    


module.exports = {
    signupCol
}



/***/ }),

/***/ 47:
/***/ (function(module, exports) {

const signupModel = (data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/register',
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
    signupModel
}
// JSON.stringify([username,password,phone,email]),

  

/***/ })

/******/ });