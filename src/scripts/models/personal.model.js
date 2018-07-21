// 全部订单
const  allModel = () =>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/mycenterall/1',
           type: 'GET',
        //    contentType: 'application/json; charset=utf-8',
           data: {
           },
           success: (result) => {
               resolve(result);
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
 }
// 已购买
 const  mycenterYes = () =>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/mycenteryes/1',
           type: 'GET',
        //    contentType: 'application/json; charset=utf-8',
           data: {

           },
           success: (result) => {
               resolve(result);
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
 }
// 购物车(未购买)
 const  mycenterNo = (id) =>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: 'api/mycenterno/'+id,
           type: 'GET',
        //    contentType: 'application/json; charset=utf-8',
           data: {

           },
           success: (result) => {
               resolve(result);
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
 }

 module.exports = {
    allModel,
    mycenterYes,
    mycenterNo
 }