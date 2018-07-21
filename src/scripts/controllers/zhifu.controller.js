const zhifuJiekou = require('../models/zhifu.model')
const zhifu_Main = require('../views/zhifu_main.html')
const zhifuMb = require('../views/zhifu_mb.html')


const zhifuCol = async () => {
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
    var a = await zhifuJiekou.zhifuModel(id);
    let html = template.render(zhifuMb, {
        aa: a.data,
    })
    $(".zhifu_main").html(html)
    $('.btn').click(function(e) { 
        var id = $(e.target).attr("id");
        console.log(id)
        location.href = "zhifusucc.html?id=" + id;
    })

}
module.exports={
    zhifuCol
}