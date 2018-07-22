const  searchModel = (ctitle, page, pageSize) =>{
    return new Promise((resolve,reject) => {
     $.ajax({
           url: '/api/index/search',
           type: 'POST',
           contentType: "application/json",
           data: JSON.stringify({
               ctitle,
               page,
               pageSize
           }),
           success: (result) => {
               resolve(result)
            // console.log(result)
            // return result
           },
           catch: (err) => {
               console.log("AJAX请求失败！")
           }
       });
    })
 }

 module.exports = {
     searchModel
 }