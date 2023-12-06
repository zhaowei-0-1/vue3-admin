<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left: 20px">vue3后台管理系统</span>
        </div>

        <div class="right">
            <span>欢迎 admin 回来</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white">
                        <User />
                    </el-icon>

                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogOut">退出</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script setup>
import { useStore } from 'vuex'
import { Menu, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const store = useStore();
const router = useRouter();
// SideMenu控制折叠
const handleCollapsed = () => {
    // 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
    store.commit("changeCollapsed")
}
// 个人中心跳转页面
const handleCenter = () => {
    router.push("/center")
}
// 退出
const handleLogOut = () => {
    // 清除本地信息
    localStorage.removeItem("token")
    router.push("/login")
}
</script>
<style lang="scss" scoped>
.el-header {
    background-color: #2d3a4b;
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left,
.right {
    display: flex;
}

.left{
    i {
        // 居中
        margin: auto;
    }
}

.right {
    .el-dropdown {
        margin: auto;
        cursor: pointer;
    }
}
</style>