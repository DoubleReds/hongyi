const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')

const zhifusucc_mainTpl = require('./views/zhifusucc_main.html')



$('#root').html(indexTpl)
$('.container').html(headerTpl +zhifusucc_mainTpl)

