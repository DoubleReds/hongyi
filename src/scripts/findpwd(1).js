const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const findpwd_mainTpl = require('./views/findpwd_main.html')
const findpwdController = require('./controllers/findpwd.controller.js')


$('#root').html(indexTpl)
$('.container').html(headerTpl + findpwd_mainTpl)
$('.container').append(footerTpl)

findpwdController.findpwdCol()
