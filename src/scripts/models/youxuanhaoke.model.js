 const  toptuModel = ()=>{
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

const  tuijianModel = ()=>{
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
const  renqiModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/countchoose',
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
const  youzhiModel = ()=>{
    return new Promise((resolve,reject) => {
       $.ajax({
           url: '/api/designCourse',
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
    toptuModel,
    tuijianModel,
    renqiModel,
    youzhiModel
}

