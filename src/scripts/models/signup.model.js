const signupModel = (data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/register',
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
    signupModel
}
// JSON.stringify([username,password,phone,email]),

  