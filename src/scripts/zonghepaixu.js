const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')

const zonghepaixu_mainTpl = require('./views/zonghepaixu_main.html')



$('#root').html(indexTpl)
$('.container').html(headerTpl + zonghepaixu_mainTpl)

