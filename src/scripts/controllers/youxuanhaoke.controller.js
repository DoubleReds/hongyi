
const youxuanhaokeJiekou = require('../models/youxuanhaoke.model')
const youxuanhaoke_Main = require('../views/youxuanhaoke_main.html')
const youxuanhaokeMb = require('../views/youxuanhaoke_mb.html')
const toptuCol = async () => {
    var a = await youxuanhaokeJiekou.toptuModel();
    var b = await youxuanhaokeJiekou.tuijianModel();
    var c = await youxuanhaokeJiekou.renqiModel();
    var d = await youxuanhaokeJiekou.youzhiModel();

    let html = template.render(youxuanhaokeMb, {
        aa: a.list,
        bb: b.list,
        cc: c.list,
        dd: d.list
        
    });
    $(".youxuanhaoke_main").html(html);
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
    })

    // var id = $('img').attr('id');
    // console.log($('img').attr('id'))
    
    // $('img').on('click', ($(this).attr('id')) => {
    //     console.log(id)
    //     // location.href="kechengxiangqing.html"
    // })
    $('img').click(function(e) { 
        var id=$(e.target).attr("id");
        location.href = "kechengxiangqing.html?id=" + id;
    })

}


module.exports={
    toptuCol
}