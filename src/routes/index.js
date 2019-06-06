/**
 * 配置路由并暴露出去，供main.js挂载
 */

import Home from '../components/default/Home.vue'
import ArticleDetail from '../components/default/ArticleDetail.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/article', component: ArticleDetail },
];

export default  routes;
