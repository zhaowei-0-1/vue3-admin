<!-- 
    @作者：vv
    @time：2023.11.16
 -->

<template>
    <div>
        <div class="formContainer">
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="120px"
                class="loginForm">
                <h3>vue3后台管理系统</h3>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// 表单的响应式对象
const loginForm = reactive({
    username: "",
    password: "",
})
// 表单引用对象
const loginFormRef = ref();
const loginRules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
})
// 登录
const submitForm = () => {

}


const handleLogin = () => {
    localStorage.setItem("token", "vv");
}
</script>

<style lang="scss" scoped>
.formContainer {
    width: 50%;
    height:50%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;
    h3{
        font-size: 30px;
    }
    .loginForm{
        margin-top: 20px;
    }
}

::v-deep .el-form-item__label {
    color: white;
    
}
</style>
