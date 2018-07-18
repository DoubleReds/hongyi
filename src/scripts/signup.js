const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const signupTpl = require('./views/signup_main.html')
const signupController = require('./controllers/signup.controller.js')

$('#root').html(indexTpl)
$('.container').html(headerTpl + signupTpl)
$('.container').append(footerTpl)

signupController.signupCol()

