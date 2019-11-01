<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-main>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div>aasdfa</el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">bsdfasd</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div>casdfasdf</el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">dasdfasdf</div></el-col>
                </el-row>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
            return {
                hahaha: 1,
            }
        }
    }
</script>
<style>
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 400px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>