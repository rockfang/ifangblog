/**
 * 配置路由并暴露出去，供main.js挂载
 */

import Home from '../components/default/Home.vue'
import ArticleDetail from '../components/default/ArticleDetail.vue'
import ArticleDetail0 from '../components/default/ArticleDetail0.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/article', component: ArticleDetail },
  { path: '/article0', component: ArticleDetail0 },
];

export default  routes;
