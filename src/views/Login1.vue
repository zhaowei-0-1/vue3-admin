<!-- 
    @作者：vv
    @time：2023.11.16
 -->

<template>
    <div>
        <div class="formContainer">

            <!-- 登录表单 -->
            <el-form ref="loginFormRef" v-model="loginForm" status-icon :rules="loginRules" label-width="120px"
                class="loginForm">

                <h3>欢迎来到vue3后台管理系统</h3>
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
import { useRouter } from 'vue-router'



// 表单的响应式对象
const loginForm = reactive({
    username: "",
    password: "",
})
// 表单引用对象
const loginFormRef = ref();
const loginRules = reactive({
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" }
    ],
    password: [{ required: true,  message: "请输入密码", trigger: "blur" }],
})
const router = useRouter();
// 登录
const submitForm = () => {
    // 1.校验表单
    loginFormRef.value.validate((valid) => {
        console.log(valid, "valid")
        if (valid) {
            console.log(loginForm, "===")
            localStorage.setItem("token", "admin")
            router.push("/index")

        }
    })
    // 2.拿到表单内容，提交后台
    // 3.设置token

}


const handleLogin = () => {
    localStorage.setItem("token", "admin");
}
</script>

<style lang="scss" scoped>
.formContainer {
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;

    h3 {
        font-size: 30px;
    }

    .loginForm {
        margin-top: 20px;
    }
}

::v-deep .el-form-item__label {
    color: white;

}
</style>
