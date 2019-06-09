/**
 * 应该配置成子路由的方式
 */
import Login from '../components/manager/Login.vue'
import Manager from '../components/manager/Manager.vue'
import Board from '../components/manager/child/Board.vue'
import ArticleType from '../components/manager/child/ArticleType.vue'
import Article from '../components/manager/child/Article.vue'
import Admin from '../components/manager/child/Admin.vue'
import Link from '../components/manager/child/Link.vue'
import Nav from '../components/manager/child/Nav.vue'
import Setting from '../components/manager/child/Setting.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/manager',
    component: Manager,
    children:[
      { path: '/', component: Board },
      { path: 'admin', component: Admin },
      { path: 'articletype', component: ArticleType },
      { path: 'article', component: Article },
      { path: 'link', component: Link },
      { path: 'nav', component: Nav },
      { path: 'setting', component: Setting },
    ]

  },

  // { path: '/content/:aid', component: Content },   /*动态路由*/

  { path: '*', redirect: '/manager' }   /*默认跳转路由*/
];

export default  routes;
