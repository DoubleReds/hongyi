const zonghe_Main = require('../views/zonghepaixu_main.html')
const zongheMb = require('../views/zonghepaixu_mb.html')

const zongheJiekou = require('../models/zonghe.model')

const zongheController =  async() => {
    var zonghe = await zongheJiekou.zongheModel()
    var type = await zongheJiekou.typeModel()
    var titlebyid = await zongheJiekou.titlebyidModel()

    let html = template.render(zongheMb, {
        list:zonghe.list.list,
        type:type.list,
        titlebyid:titlebyid.list
    });
    
    $(".zonghepaixu_main").html(html);
}

module.exports = {
    zongheController
}