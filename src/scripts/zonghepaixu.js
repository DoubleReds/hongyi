const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const zonghepaixu_mainTpl = require('./views/zonghepaixu_main.html')
const zonghepaixuController = require('./controllers/zonghe.controller')

$('#root').html(indexTpl)
$('.container').html(headerTpl + zonghepaixu_mainTpl + footerTpl)


zonghepaixuController.zongheController()
