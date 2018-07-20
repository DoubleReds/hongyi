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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = "<div class=\"youxuanhaoke_main\"></div>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">    <div>            &copy;;2018 Search Beyond.cn             京ICP备11015476号 京公网安备11015013401号 京ICP证110318号    </div></div>"

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footererTpl = __webpack_require__(2)
const youxuanhaokeController = __webpack_require__(27)
const youxuanhaoke_Main = __webpack_require__(12)




$('#root').html(indexTpl)
$('.container').html(headerTpl + youxuanhaoke_Main + footererTpl)

youxuanhaokeController.toptuCol();
youxuanhaokeController.mySwiper;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {


const youxuanhaokeJiekou = __webpack_require__(28)
const youxuanhaoke_Main = __webpack_require__(12)
const youxuanhaokeMb = __webpack_require__(29)
const toptuCol = async () => {
    var a = await youxuanhaokeJiekou.toptuModel();
    var b = await youxuanhaokeJiekou.tuijianModel();
    var c = await youxuanhaokeJiekou.renqiModel();
    var d = await youxuanhaokeJiekou.youzhiModel();

    let html = template.render(youxuanhaokeMb, {
        aa: a.list,
        bb: b.list,
        cc: c.list,
        dd: d.list
        
    });
    $(".youxuanhaoke_main").html(html);
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
    })

    // var id = $('img').attr('id');
    // console.log($('img').attr('id'))
    
    // $('img').on('click', ($(this).attr('id')) => {
    //     console.log(id)
    //     // location.href="kechengxiangqing.html"
    // })
    $('img').click(function(e) { 
        var id=$(e.target).attr("id");
        location.href = "kechengxiangqing.html?id=" + id;
    })

}


module.exports={
    toptuCol
}

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

 const  toptuModel = ()=>{
    return new Promise((resolve,reject) => {
        $.ajax({
            url: '/api/bigimg',
            type: 'GET',
            data: {
            },
            success: (result) => {
                resolve(result);
            },
            catch: (err) => {
                console.log("AJAX请求失败！")
            }
        });
    })
}

const  tuijianModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/randomchoose',
           type: 'GET',
           data: {
              
           },
           success: (result) => {
               resolve(result);
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
    
}
const  renqiModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/countchoose',
           type: 'GET',
           data: {
              
           },
           success: (result) => {
               resolve(result);
              
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
    
}
const  youzhiModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/designCourse',
           type: 'GET',
           data: {
              
           },
           success: (result) => {
               resolve(result);
              
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
    
}

module.exports = {
    toptuModel,
    tuijianModel,
    renqiModel,
    youzhiModel
}



/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = "<!-- {{each aa}}<div class=\"toptu\">    <a href=\"\"><img src=\"http://10.9.166.79:8080/images/{{$value.bigImg}}\" alt=\"\"></a></div>{{/each}} --><div class=\"swiper-container\">        <div class=\"swiper-wrapper\">               {{each aa}}                <div class=\"swiper-slide\"><img id=\"{{$value.id}}\" src=\"http://10.9.166.79:8080/images/{{$value.bigImg}}\" alt=\"\"></div>                {{/each}}        </div></div><div class=\"yiyang\">    <h2 class=\"title\">        推荐课程    </h2>    <div class=\"tu\">        <ul>            {{each bb}}             <li><img id=\"{{$value.id}}\" src=\"http://10.9.166.79:8080/images/{{$value.url}}\" alt=\"\"></li>             {{/each}}         </ul>     </div> </div><div class=\"yiyang_main\">    <h2 class=\"title\">        人气课程    </h2>    <div class=\"tu\">        <ul>            {{each cc}}            <li><img  id=\"{{$value.id}}\" src=\"http://10.9.166.79:8080/images/{{$value.url}}\" alt=\"\"></li>                       {{/each}}        </ul>    </div></div><div class=\"yiyang\">    <h2 class=\"title\">        优质课程    </h2>    <div class=\"tu\">        <ul>            {{each dd}}            <li><img id=\"{{$value.id}}\" src=\"http://10.9.166.79:8080/images/{{$value.url}}\" alt=\"\"></li>            {{/each}}        </ul>    </div></div>"

/***/ })

/******/ });