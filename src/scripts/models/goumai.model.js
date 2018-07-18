const  goumaiModel = (id)=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/teach/'+id,
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
    goumaiModel
}