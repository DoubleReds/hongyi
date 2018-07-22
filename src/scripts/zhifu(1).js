const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const zhifu_mainTpl = require('./views/zhifu_main.html')
const zhifuController = require('./controllers/zhifu.controller.js')


$('#root').html(indexTpl)
$('.container').html(headerTpl + zhifu_mainTpl)

zhifuController.zhifuCol()
