/**
 * 应该配置成子路由的方式
 */
import Login from '../components/admin/Login.vue'
import Manager from '../components/admin/Manager.vue'
import Nav from '../components/admin/Nav.vue'
import Article from '../components/admin/Article.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/manager', component: Manager },
  { path: '/nav', component: Nav },
  // { path: '/manager/article', component: Article }

];

export default  routes;
