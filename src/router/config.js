// 动态路由
import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/userManage/UserAdd.vue'
import UserList from '../views/userManage/UserList.vue'
import NewsAdd from '../views/newsManage/NewsAdd.vue'
import NewsList from '../views/newsManage/NewsList.vue'
import ProductAdd from '../views/productManage/ProductAdd.vue'
import ProductList from '../views/productManage/ProductList.vue'
import NotFound from '../views/notFound/NotFound.vue'
const RoutesConfig = [
    {
        path: '/index',
        component: Home,
    },

    {
        path: '/center',
        component: Center,
    },
    {
        path: '/userManage/adduser',
        component: UserAdd,
    },
    {
        path: '/userManage/userlist',
        component: UserList,
    },
    {
        path: '/newsManage/addnews',
        component: NewsAdd,
    },
    {
        path: '/newsManage/newslist',
        component: NewsList,
    },
    {
        path: '/productManage/addproduct',
        component: ProductAdd,
    },
    {
        path: '/productManage/productlist',
        component: ProductList,
    },
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: NotFound
    }
]
// 导出
export default RoutesConfig