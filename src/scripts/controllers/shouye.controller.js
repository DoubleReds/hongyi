const shouyeJiekou = require('../models/shouye.model')
const shouye_Main = require('../views/shouye_main.html')
const shouyeMb = require('../views/shouye_mb.html')
const headerTpl = require('../views/header.html')

const courseCol = async () => {
    var lunbo = await shouyeJiekou.swiperModel();
    var a = await shouyeJiekou.courseModel();
    var b = await shouyeJiekou.exhibitionModel();
    var c = await shouyeJiekou.quotationModel();

    let html = template.render(shouyeMb, {
        swiper: lunbo.list,
        course: a.list,
        exhibition: b.list,
        quotation: c.list
    });
    $(".shouye_main").html(html);
    var swiper = new Swiper('.swiper-container', {
        autoplay:true
    });

    $('img').click(function(e) { 
        var id=$(e.target).attr("id");
        location.href = "kechengxiangqing.html?id=" + id;
    })

}
module.exports = {
    courseCol
}