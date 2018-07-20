const  swiperModel = ()=>{
    return new Promise((resolve,reject) => {
        $.ajax({
            url: '/api/bigimg',
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


const  courseModel = ()=>{
   return new Promise((resolve,reject) => {
      $.ajax({
          url: '/api/randomchoose',
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

const  exhibitionModel = ()=>{
   return new Promise((resolve,reject) => {
      $.ajax({
          url: '/api/index/exhibition',
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

const  quotationModel = ()=>{
   return new Promise((resolve,reject) => {
      $.ajax({
          url: '/api/randomchoose',
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
    courseModel,
    exhibitionModel,
    quotationModel,
    swiperModel
}

