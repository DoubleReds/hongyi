const findpwdModel = (data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/forgpassword',
            type: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            data,
            success: (result) => {
                resolve(result);
            },
            catch: (err) => {
                console.log("AJAX请求失败！")
            }
        })
    })
}
module.exports = {
    findpwdModel
}