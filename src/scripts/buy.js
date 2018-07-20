const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const buy_Main = require('./views/buy_main.html')
const buyMb = require('./views/buy.html')
const buyController = require('./controllers/personal.controller')

$('#root').html(indexTpl)

$('.container').html(headerTpl +  buy_Main)
$('.container').append( footerTpl)

buyController.allCol()