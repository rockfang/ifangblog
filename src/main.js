import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from './routes/index.js'
import admin from './routes/admin.js'

//mavonEditor使用
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
//element-ui使用
import { Button, Select,Form,FormItem,Input,Icon } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);

const router = new VueRouter(
  {
    routes: [
      ...index,
      ...admin
    ]
  }
);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
