// 配置路由相关信息
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';
// import Home from '../views/home/Home.vue'
// import Center from '../views/center/Center.vue'
// 导入
import RoutesConfig from './config';
import store from '../store';
// 创建vue-router对象
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // Main的嵌套路由，根据权限动态添加
  {
    path: '/main',
    name: 'main',
    component: Main,
  }
];

// 使用createRouter函数来创建一个路由器实例
const router = createRouter({
  // history: 指定路由的历史记录模式。使用createWebHashHistory()函数，会将URL中的哈希值（#后面的部分）作为历史记录的一部分。
  history: createWebHashHistory(),
  // routes: 是一个包含路由配置的数组，每个元素都是一个对象，描述了单个路由的信息。
  routes
});
// 路由拦截 每次路由跳转之前 都会执行
// 使用 router.beforeEach 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    // next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    next();
  } else {
    //     // 授权(已登录)next()
    //     // 未授权（未登录），重定向到login
    if (!localStorage.getItem("token")) {
      next({
        path: "/login",
      })
    } else {
      if (!store.state.isGetterRouter) {
        ConfigRouter();
        next({
          path: to.fullPath,
        });
      } else {
        next()
      }
    }
  }
})

const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute("main", item)
  });
  // 改变isGetterRouter =true
  store.commit("changeGetterRouter", true)
};
// 动态 给Main 加了一个子路由
// router.addRoute("Main",{
//   path: '/index',
//   component: Home,
// })

// 导出路由
export default router
