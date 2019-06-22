/**
 * 应该配置成子路由的方式
 */
import Login from '../components/manager/Login.vue'
import Manager from '../components/manager/Manager.vue'
import Board from '../components/manager/child/Board.vue'

import ArticleType from '../components/manager/child/ArticleType.vue'
import ArticleTypeAdd from '../components/manager/child/ArticleTypeAdd.vue'
import ArticleTypeEdit from '../components/manager/child/ArticleTypeEdit.vue'

import Tag from '../components/manager/child/Tag.vue'
import TagAdd from '../components/manager/child/TagAdd.vue'
import TagEdit from '../components/manager/child/TagEdit.vue'

import Article from '../components/manager/child/Article.vue'
import ArticleAdd from '../components/manager/child/ArticleAdd.vue'

import Admin from '../components/manager/child/Admin.vue'
import AdminAdd from '../components/manager/child/AdminAdd.vue'
import AdminEdit from '../components/manager/child/AdminEdit.vue'

import Link from '../components/manager/child/Link.vue'
import LinkAdd from '../components/manager/child/LinkAdd.vue'

import Nav from '../components/manager/child/Nav.vue'
import NavAdd from '../components/manager/child/NavAdd.vue'
import Setting from '../components/manager/child/Setting.vue'
import ArticleEdit from "../components/manager/child/ArticleEdit";

const routes = [
  { path: '/login', component: Login },
  {
    path: '/manager',
    component: Manager,
    children:[
      { path: '/', component: Board },
      { path: 'admin', component: Admin },
      { path: 'admin/add', component: AdminAdd },
      { path: 'admin/edit', component: AdminEdit },

      { path: 'articletype', component: ArticleType },
      { path: 'articletype/add', component: ArticleTypeAdd },
      { path: 'articletype/edit', component: ArticleTypeEdit },

      { path: 'tag', component: Tag },
      { path: 'tag/add', component: TagAdd },
      { path: 'tag/edit', component: TagEdit },

      { path: 'article', component: Article },
      { path: 'article/add', component: ArticleAdd },
      { path: 'article/edit', component: ArticleEdit },

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
