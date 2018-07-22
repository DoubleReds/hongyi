const kechengxiangqingJiekou = require('../models/kechengxiangqing.model')
const kechengxiangqing_Main = require('../views/kechengxiangqing_main.html')
const kechengxiangqingMb = require('../views/kechengxiangqing_mb.html')

const keChengCol = async () => {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
       var str = url.substr(1);
       strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
       }
    }
    var id = theRequest.id
    console.log(id)
    var a = await kechengxiangqingJiekou.keChengModel(id);
    let html = template.render(kechengxiangqingMb, {
        aa: a.data,
    })
    $(".kechengxiangqing_main").html(html)
    $('.carr .btn-buy').click(function(id) { 
        // var id=$(e.target).attr("id");
        console.log(22222)
        console.log(id)
        // location.href = "kechengxiangqing.html?id=" + id;
    })

    $('.carr input').click(function(e) { 
        var id = $(e.target).attr("class");
        location.href = "goumai.html?id=" + id;
    })

}
module.exports={
    keChengCol
}


