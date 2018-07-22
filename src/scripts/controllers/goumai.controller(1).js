const goumaiJiekou = require('../models/goumai.model')
const goumaike_Main = require('../views/goumai_main.html')
const goumaiMb = require('../views/goumai_mb.html')


const goumaiCol = async () => {
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
    var a = await goumaiJiekou.goumaiModel(id);
    let html = template.render(goumaiMb, {
        aa: a.data,
    })
    $(".goumai_main").html(html)
    $('.btn').click(function(e) { 
        var id = $(e.target).attr("id");
        location.href = "zhifu.html?id=" + id;
    })

}
module.exports={
    goumaiCol
}