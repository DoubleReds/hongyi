const findpwdModel = require('../models/findpwd.model.js')

const findpwdCol = () => {
        
    $('#login-btn').on('click', async () => {
        let { username, email, password } = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#repwd').val(),
        }
        let result = await findpwdModel.findpwdModel(JSON.stringify({ username, email, password }))
        console.log(result)
        if (result.code == -2) {
            console.log(qqqq)
            alert('邮箱不正确，请重新输入')
        }
        if (result.code == -1) {
            alert('用户名不存在，请重新输入')
        }
        if (result.code==0) {
            
                location.href = "/signin.html"
          
        }
             $('#username').val('')
             $('#email').val('')
            $('#repwd').val('')

            })
        
}
    
    


module.exports = {
    findpwdCol
}

