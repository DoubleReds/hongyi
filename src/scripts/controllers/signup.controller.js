const signupModel = require('../models/signup.model.js')

const signupCol = () => {
        
    $('#register-btn').on('click', async () => {
                console.log(111)
                let { username, password,phone,email } = {
                    username: $('#username').val(),
                    password: $('#pwd').val(),
                    phone: $("#phoneNumber").val(),
                    email: $("#email").val()
                }
                let result = await signupModel.signupModel(JSON.stringify({ username, password, phone, email }))
                // if (result.code == 0) {
                //                     location.href="/signin.html"
                //         }
                //         if (result.code == -1) {
                //             alert("用户名已存在")
                //         }
                        
                    $('#username').val(''),
                    $('#pwd').val(''),
                    $("#phoneNumber").val(''),
                    $("#email").val('')
        })
        }
    


module.exports = {
    signupCol
}

