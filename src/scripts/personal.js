const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const personal_Main = require('./views/personal_main.html')
const personalMb = require('./views/personal_mb.html')
const personalController = require('./controllers/personal.controller')

$('#root').html(indexTpl)

$('.container').html(headerTpl +  personal_Main)
$('.container').append( footerTpl)

personalController.mycenterYes()
