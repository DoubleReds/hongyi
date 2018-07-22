const signinModel = (data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/login',
            type: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            data,
            success: (result) => {
                resolve(result);
                console.log(1)
            },
            catch: (err) => {
                console.log("AJAX请求失败！")
            }
        })
    })
}
module.exports = {
    signinModel
}