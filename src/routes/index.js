/**
 * 配置路由并暴露出去，供main.js挂载
 */

import ArticleDetail from '../components/default/ArticleDetail.vue'
// import TagArticle from '../components/default/TagArticle.vue'
// import Home from '../components/default/Home.vue'
// import TagWall from '../components/default/TagWall.vue'
// import About from '../components/default/About.vue'
// import ArticleDetail0 from '../components/default/ArticleDetail0.vue'
const routes = [

  { path: '/', component: resolve => require(['../components/default/Home.vue'], resolve)},

  // { path: '/article', component: resolve => require(['../components/default/ArticleDetail.vue'], resolve)},
  { path: '/article', component: ArticleDetail},//处理详情页因为懒加载经常出现跳转无效
  // { path: '/article0', component: resolve => require(['../components/default/ArticleDetail0.vue'], resolve)},
  { path: '/tagwall', component: resolve => require(['../components/default/TagWall.vue'], resolve)},
  { path: '/tagarticle/:name', component: resolve => require(['../components/default/TagArticle.vue'], resolve)},
  { path: '/about', component: resolve => require(['../components/default/About.vue'], resolve)},
];

export default  routes;
