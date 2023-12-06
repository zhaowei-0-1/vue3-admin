<template>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" class="loginContainer">
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
</template>
<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
// 表单的响应式对象
const loginForm = reactive({
    username: "",
    password: "",
})
// 表单引用对象
const loginFormRef = ref();
const rules = reactive({
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" }
    ],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
})
const router = useRouter();
// 登录
const submitForm = () => {
    // 1.校验表单
    loginFormRef.value.validate((valid) => {
        // console.log(valid, "valid")
        if (valid) {
            // console.log(loginForm, "===")
            localStorage.setItem("token", "admin");
            axios.get("/users").then(res => {
                console.log(res.data)
            })
            router.push("/index")

        }
    })
    // 2.拿到表单内容，提交后台
    // 3.设置token

}
</script>

<style lang="scss" scoped>
.loginContainer {
    width: 350px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 100px auto;

    h3 {
        text-align: center;
        margin-bottom: 20px;
        color: #505450;
    }

    ::v-deep .el-form-item__content {
        justify-content: center;
    }

    // ::v-deep .el-form-item__label {
    //     color: white;
    // }
}
</style>