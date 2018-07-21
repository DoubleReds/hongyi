const personal_Main = require('../views/personal_main.html')
const personalMB = require('../views/personal_mb.html')
// const headerTpl = require('../views/header.html')
const buyMb = require('../views/buy.html')
const carMb = require('../views/car.html')

const personalModel = require('../models/personal.model')
// 已购买
const mycenterYes = async () => {
    var yes = await personalModel.mycenterYes();
    let allList = yes.data
    // console.log(allList);
    let html = template.render(personalMB, {
        yes:allList
    }); 
    // console.log(html)
    $('.personal_main').html(html)

    $('#continue').click(function(e) { 
        var id=$(e.target).attr("id");
        location.href = "kechengxiangqing.html?id=" + id
    })
}
// 全部订单
const allCol = async () => {
    var buy = await personalModel.allModel();
    let buyList = buy.data
    // console.log(buyList)
    let html = template.render(buyMb, {
        buy:buyList
    }); 
    // console.log(html)
    $('.buy_main').html(html)
    
}
// 购物车 未购买
const mycenterNo = async () => {
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
    // console.log(id)
    var a = await personalModel.mycenterNo(id);
    // console.log(a)
    let html = template.render(carMb, {
        all: a.data,
    })
    $(".car_main").html(html)


    // $('#sum').click(function(e) { 
    //     var id = $(e.target).attr("class");
    //     location.href = "car.html?id=" + id;
    // })
  
        if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
        var ret = [];
        var els = document.getElementsByTagName('*');
        for (var i = 0, len = els.length; i < len; i++) {
        if (els[i].className.indexOf(cls + ' ') >=0 || els[i].className.indexOf(' ' + cls + ' ') >=0 || els[i].className.indexOf(' ' + cls) >=0) {
        ret.push(els[i]);
        }
        }
        // console.log(ret)
        return ret;
        }
        }
        var table = document.getElementById('cartTable'); // 购物车表格
        var selectInputs = document.getElementsByClassName('check'); // 所有勾选框
        var checkAllInputs = document.getElementsByClassName('check-all') // 全选框
        var tr = table.children[1].rows; //行
        var selectedTotal = document.getElementById('selectedTotal'); //已选商品数目容器
        var priceTotal = document.getElementById('priceTotal'); //总计
        var deleteAll = document.getElementById('deleteAll'); // 删除全部按钮
        var selectedViewList = document.getElementById('selectedViewList'); //浮层已选商品列表容器
        var selected = document.getElementById('selected'); //已选商品
        var foot = document.getElementById('foot');
        // var sum = document.getElementById('#sum');
        // sum.on('click', function(e) {
        // var id=$(e.target).attr("id");
        // location.href = "zhifu.html?id=" + id
        // })
        // 更新总数和总价格，已选浮层
        function getTotal() {
        var seleted = 0;
        var price = 0;
        var HTMLstr = '';
        for (var i = 0, len = tr.length; i < len; i++) {
        if (tr[i].getElementsByTagName('input')[0].checked) {
        tr[i].className = 'on';
        seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
        price += parseFloat(tr[i].cells[4].innerHTML);
        HTMLstr += '<div>< img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">取消选择</span></div>'
        }
        else {
        tr[i].className = '';
        }
        } 
        selectedTotal.innerHTML = seleted;
        priceTotal.innerHTML = price.toFixed(2);
        selectedViewList.innerHTML = HTMLstr;
        if (seleted == 0) {
        foot.className = 'foot';
        }
        }
        // 计算单行价格
        // function getSubtotal(tr) {
        // var cells = tr.cells;
        // var price = cells[2]; //单价
        // var subtotal = cells[4]; //小计td
        // var countInput = tr.getElementsByTagName('input')[1]; //数目in
    


}

module.exports = {
    mycenterYes,
    allCol,
    mycenterNo
}