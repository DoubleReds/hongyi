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
<<<<<<< HEAD
    var all = await personalModel.mycenterNo();
    let allList = all.data
    // console.log(allList)
    let html = template.render(carMb, {
        all:allList
    }); 
    $('.car_main').html(html)
    $('#goumaiBtn').click(function(e) {
        var id=$(e.target).attr("id");
        location.href = "goumai.html?id=" + id
    })
// car
    // window.onload = function () {
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
     
=======
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
>>>>>>> 0719jh
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
<<<<<<< HEAD
        //     var id=$(e.target).attr("id");
        //     location.href = "zhifu.html?id=" + id
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
                    HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">取消选择</span></div>'
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
        function getSubtotal(tr) {
            var cells = tr.cells;
            var price = cells[2]; //单价
            var subtotal = cells[4]; //小计td
            var countInput = tr.getElementsByTagName('input')[1]; //数目input
            var span = tr.getElementsByTagName('span')[1]; //-号
            //写入HTML
            subtotal.innerHTML = (parseInt(countInput.value) * parseFloat(price.innerHTML)).toFixed(2);
            //如果数目只有一个，把-号去掉
            if (countInput.value == 1) {
                span.innerHTML = '';
            }else{
                span.innerHTML = '-';
            }
        }
     
        // 点击选择框
        for(var i = 0; i < selectInputs.length; i++ ){
            selectInputs[i].onclick = function () {
                if (this.className.indexOf('check-all') >= 0) { //如果是全选，则吧所有的选择框选中
                    for (var j = 0; j < selectInputs.length; j++) {
                        selectInputs[j].checked = this.checked;
                    }
                }
                if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
                    for (var i = 0; i < checkAllInputs.length; i++) {
                        checkAllInputs[i].checked = false;
                    }
                }
                getTotal();//选完更新总计
            }
        }
     
        // 显示已选商品弹层
        selected.onclick = function () {
            if (selectedTotal.innerHTML != 0) {
                foot.className = (foot.className == 'foot' ? 'foot show' : 'foot');
            }
        }
     
        //已选商品弹层中的取消选择按钮
        selectedViewList.onclick = function (e) {
            var e = e || window.event;
            var el = e.srcElement;
            if (el.className=='del') {
                var input =  tr[el.getAttribute('index')].getElementsByTagName('input')[0]
                input.checked = false;
                input.onclick();
            }
        }
     
        //为每行元素添加事件
        for (var i = 0; i < tr.length; i++) {
            //将点击事件绑定到tr元素
            tr[i].onclick = function (e) {
                var e = e || window.event;
                var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
                var cls = el.className; //触发元素的class
                var countInout = this.getElementsByTagName('input')[1]; // 数目input
                var value = parseInt(countInout.value); //数目
                //通过判断触发元素的class确定用户点击了哪个元素
                switch (cls) {
                    case 'add': //点击了加号
                        countInout.value = value + 1;
                        getSubtotal(this);
                        break;
                    case 'reduce': //点击了减号
                        if (value > 1) {
                            countInout.value = value - 1;
                            getSubtotal(this);
                        }
                        break;
                    case 'delete': //点击了删除
                        var conf = confirm('确定删除此商品吗？');
                        if (conf) {
                            this.parentNode.removeChild(this);
                        }
                        break;
                }
                getTotal();
            }
            // 给数目输入框绑定keyup事件
            tr[i].getElementsByTagName('input')[1].onkeyup = function () {
                var val = parseInt(this.value);
                if (isNaN(val) || val <= 0) {
                    val = 1;
                }
                if (this.value != val) {
                    this.value = val;
                }
                getSubtotal(this.parentNode.parentNode); //更新小计
                getTotal(); //更新总数
            }
        }
        // 点击全部删除
        deleteAll.onclick = function () {
            if (selectedTotal.innerHTML != 0) {
                var con = confirm('确定删除所选商品吗？'); //弹出确认框
                if (con) {
                    for (var i = 0; i < tr.length; i++) {
                        // 如果被选中，就删除相应的行
                        if (tr[i].getElementsByTagName('input')[0].checked) {
                            tr[i].parentNode.removeChild(tr[i]); // 删除相应节点
                            i--; //回退下标位置
                        }
                    }
                }
            } else {
                alert('请选择商品！');
            }
            getTotal(); //更新总数
        }
        
        // 默认全选
        checkAllInputs[0].checked = false;
        checkAllInputs[0].onclick();
    // }
=======
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
    

>>>>>>> 0719jh

}

module.exports = {
    mycenterYes,
    allCol,
    mycenterNo
}