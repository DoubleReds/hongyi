const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const car_Main = require('./views/car_main.html')
const carMb = require('./views/car.html')
const carController = require('./controllers/personal.controller')

$('#root').html(indexTpl)

$('.container').html(headerTpl +  car_Main)
$('.container').append( footerTpl)

carController.mycenterNo()