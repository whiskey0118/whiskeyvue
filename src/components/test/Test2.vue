<template>
    <el-form :rules="rules" class="login-container" label-position="left"
             label-width="0px" v-loading="loading">
        <h3 class="login_title">系统登录</h3>
        <el-form-item prop="account">
            <span>hahaha</span>
        </el-form-item>
        <el-form-item prop="checkPass">
            <span>hahaha</span>
        </el-form-item>
            <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
        <el-form-item style="width: 100%">
            <el-button type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import test from './test'
    console.log(typeof(test))
    console.log(test.data().test)
    // test()
    export default {

    }
</script>

<style>
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .login_remember {
        margin: 0px 0px 35px 0px;
        text-align: left;
    }
</style>