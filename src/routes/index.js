/**
 * 配置路由并暴露出去，供main.js挂载
 */

import Home from '../components/default/Home.vue'
import ArticleDetail from '../components/default/ArticleDetail.vue'
import ArticleDetail0 from '../components/default/ArticleDetail0.vue'
import TagWall from '../components/default/TagWall.vue'
import TagArticle from '../components/default/TagArticle.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/article', component: ArticleDetail },
  { path: '/article0', component: ArticleDetail0 },
  { path: '/tagwall', component: TagWall },
  { path: '/tagarticle/:name', component: TagArticle }
];

export default  routes;
