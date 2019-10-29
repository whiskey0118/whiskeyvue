
var haha=123;

export default {
    data(){
        return {
            rules: {
                account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}]
            },
            checked: true,
            loginForm: {
                username: 'sang',
                password: '123'
            },
            loading: false
        }
    }
}

