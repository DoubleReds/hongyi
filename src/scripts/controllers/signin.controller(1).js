const signinModel = require('../models/signin.model.js')

const signinCol = () => {
        
    $('#login-btn').on('click', async () => {
                console.log(111)
                let { username, password} = {
                    username: $('#username').val(),
                    password: $('#pwd').val(),
                }
        let result = await signinModel.signinModel(JSON.stringify({ username, password}))
        if (result.code == 0) {
                    location.href="shouye.html"
        }
        if (result.code == -2) {
            alert("密码错误")
        }
        if (result.code == -1) {
            alert("用户名不存在")
        }
            })
        }
    


module.exports = {
    signinCol
}

