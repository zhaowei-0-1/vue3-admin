import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';
// import Home from '../views/home/Home.vue'
// import Center from '../views/center/Center.vue'
// 导入
import RoutesConfig from './config';
import store from '../store';
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 路由拦截 每次路由跳转之前 都会执行
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
  } else {
    // 授权(已登录)next()
    // 未授权（未登录），重定向到login
    if (!localStorage.getItem("token")) {
      next({
        path: '/login',
      })
    } else {
      if (!store.state.isGetterRouter) {
        configRouter();
        next({
          path: to.fullPath,
        });
      } else {
        next()
      }
    }
  }
})

const configRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute("Main", item)
  });
  // 改变isGetterRouter =true

  store.commit("changeGetterRouter", true)
};
// 动态 给Main 加了一个子路由
// router.addRoute("Main",{
//   path: '/index',
//   component: Home,
// })


export default router
