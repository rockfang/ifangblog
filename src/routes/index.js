/**
 * 配置路由并暴露出去，供main.js挂载
 */

import ArticleDetail from '../components/default/ArticleDetail.vue'
const routes = [

  { path: '/', component: resolve => require(['../components/default/Home.vue'], resolve)},

  { path: '/article', component: resolve => require(['../components/default/ArticleDetail.vue'], resolve)},
  { path: '/article0', component: resolve => require(['../components/default/ArticleDetail0.vue'], resolve)},
  { path: '/tagwall', component: resolve => require(['../components/default/TagWall.vue'], resolve)},
  { path: '/tagarticle/:name', component: resolve => require(['../components/default/TagArticle.vue'], resolve)},
];

export default  routes;
