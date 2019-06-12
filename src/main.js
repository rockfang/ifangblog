import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from './routes/index.js'
import admin from './routes/admin.js'

//vue-rource使用
import VueResource from 'vue-resource'
Vue.use(VueResource);

//mavonEditor使用
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
//element-ui使用
import { Button, Select,Form,FormItem,Input,Icon,Dropdown,DropdownItem,DropdownMenu,Menu,Submenu,
  MenuItem,RadioGroup,RadioButton,MenuItemGroup ,
  Container,Aside,Header,Main,Footer,Breadcrumb,BreadcrumbItem,Col,Tooltip,
  Table,TableColumn,Popover,Tag,Notification,Loading,Option
} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(MenuItemGroup.name, MenuItemGroup);

Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);

Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Col.name, Col);
Vue.component(Tooltip.name, Tooltip);

Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Popover.name, Popover);
Vue.component(Tag.name, Tag);
Vue.component(Option.name, Option);

Vue.component(Notification.name, Notification);
Vue.prototype.$notify = Notification;

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;

const router = new VueRouter(
  {
    mode: 'history',
    routes: [
      ...index,
      ...admin
    ]
  }
);
/**
 * vue-resource拦截器
 */
Vue.http.interceptors.push((request, next) => {
  console.log('come in interceptors');
  next((response) => {
    if(response.code == 1002) {
      this.$router.push('/login');
      return response
    }
  });
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
