const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footererTpl = require('./views/footer.html')
const youxuanhaokeController = require('./controllers/youxuanhaoke.controller.js')
const youxuanhaoke_Main = require('./views/youxuanhaoke_main.html')




$('#root').html(indexTpl)
$('.container').html(headerTpl + youxuanhaoke_Main + footererTpl)

youxuanhaokeController.toptuCol();
youxuanhaokeController.mySwiper;
