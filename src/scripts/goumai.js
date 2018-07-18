const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const goumai_mainTpl = require('./views/goumai_main.html')
const goumaiController = require('./controllers/goumai.controller.js')


$('#root').html(indexTpl)
$('.container').html(headerTpl + goumai_mainTpl + footerTpl)


goumaiController.goumaiCol()
