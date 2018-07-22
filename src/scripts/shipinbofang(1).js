const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')

const shipinbofangTpl = require('./views/shipinbofang_main.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl + shipinbofangTpl)


