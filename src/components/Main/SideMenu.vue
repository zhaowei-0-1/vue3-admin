<template>
    <el-aside :width="$store.state.iscollapsed ? '64px' : '120px'">
        <!-- 侧边栏折叠collapse vuex状态存储 通过 store.state 来获取状态对象  -->
        <!--  :default-active页面加载时默认激活菜单的 -->
        <el-menu :collapse="$store.state.iscollapsed" :collapse-transition="false" :router="true"
            :default-active="route.fullPath">
            <!-- 一级菜单  index高亮 跳转路径-->
            <el-menu-item index="/index">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </el-menu-item>

            <el-menu-item index="/center">
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>个人中心</span>
            </el-menu-item>
            <!-- 二级菜单 -->
            <el-sub-menu index="/userManage">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/userManage/adduser">添加用户</el-menu-item>
                <el-menu-item index="/userManage/userlist">用户列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/newsManage">
                <template #title>
                    <el-icon>
                        <MessageBox />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/newsManage/addnews">创建新闻</el-menu-item>
                <el-menu-item index="/newsManage/newslist">新闻列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/productManage">
                <template #title>
                    <el-icon>
                        <Reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/productManage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/productManage/productlist">产品列表</el-menu-item>
            </el-sub-menu>


        </el-menu>
    </el-aside>
</template>
<script setup>
// 导入图标
import { HomeFilled, Avatar, UserFilled, MessageBox, Reading, Pointer } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
// 拿到当前匹配到的路由对象
const route = useRoute();
// route.fullPath当前路径
console.log(route.fullPath);

</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;
    .el-menu{
        height: 100vh;
    }
}
</style>