/**
 * 应该配置成子路由的方式
 */
import Login from '../components/manager/Login.vue'
import Manager from '../components/manager/Manager.vue'
import Board from '../components/manager/child/Board.vue'
import ArticleType from '../components/manager/child/ArticleType.vue'
import ArticleTypeAdd from '../components/manager/child/ArticleTypeAdd.vue'
import Article from '../components/manager/child/Article.vue'
import ArticleAdd from '../components/manager/child/ArticleAdd.vue'
import Admin from '../components/manager/child/Admin.vue'
import AdminAdd from '../components/manager/child/AdminAdd.vue'

import Link from '../components/manager/child/Link.vue'
import LinkAdd from '../components/manager/child/LinkAdd.vue'

import Nav from '../components/manager/child/Nav.vue'
import NavAdd from '../components/manager/child/NavAdd.vue'
import Setting from '../components/manager/child/Setting.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/manager',
    component: Manager,
    children:[
      { path: '/', component: Board },
      { path: 'admin', component: Admin },
      { path: 'admin/add', component: AdminAdd },

      { path: 'articletype', component: ArticleType },
      { path: 'articletype/add', component: ArticleTypeAdd },

      { path: 'article', component: Article },
      { path: 'article/add', component: ArticleAdd },

      { path: 'link', component: Link },
      { path: 'link/add', component: LinkAdd },

      { path: 'nav', component: Nav },
      { path: 'nav/add', component: NavAdd },
      { path: 'setting', component: Setting },
    ]

  },

  // { path: '/content/:aid', component: Content },   /*动态路由*/

  // { path: '*', redirect: '/manager' }   /*默认跳转路由*/
];

export default  routes;
