const  zongheModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/defaulthot/1',
           type: 'GET',
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

 const  typeModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/type',
           type: 'GET',
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
 

 const titlebyidModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/titlebyid/1',
           type: 'GET',
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
    zongheModel,
    typeModel,
    titlebyidModel
}