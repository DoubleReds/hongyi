const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const shouye_Main = require('./views/shouye_main.html')

const shouyeController = require('./controllers/shouye.controller')
const headerController = require('./controllers/header.controller')

$('#root').html(indexTpl)
$('.container').html(headerTpl + shouye_Main +footerTpl)

shouyeController.courseCol()
headerController.searchController()

