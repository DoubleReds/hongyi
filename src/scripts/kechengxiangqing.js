const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footererTpl = require('./views/footer.html')
const kechengxiangqingController = require('./controllers/kechengxiangqing.controller.js')
const kechengxiangqing_Main = require('./views/kechengxiangqing_main.html')



$('#root').html(indexTpl)
$('.container').html(headerTpl + kechengxiangqing_Main + footererTpl)

kechengxiangqingController.keChengCol();

