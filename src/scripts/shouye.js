const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')

const shouyeTpl = require('./views/shouye_main.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl + shouyeTpl +footerTpl)


