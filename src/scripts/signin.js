const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const signinTpl = require('./views/signin_main.html')


const signinController = require('./controllers/signin.controller.js')
  

$('#root').html(indexTpl)
$('.container').html(headerTpl + signinTpl)
$('.container').append(footerTpl)
 
signinController.signinCol()

