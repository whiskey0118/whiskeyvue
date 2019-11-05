<template>
    <el-form :rules="rules" class="login-container" label-position="left" label-width="0px">
    <el-form-item style="width: 100%">
        <el-button type="primary" v-on:click="checkTest()" style="width: 100%">登录</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
    import login from './Login'
    export default {
        data(){
            return{
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
        },
        methods:{
            checkTest(){
                alert('Hi! I\'m ' + 'hahah.');
            }
        }
    }


</script>