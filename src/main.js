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
import { Button, Select,Form,FormItem,Input,Icon,Dropdown,DropdownItem,DropdownMenu,Menu,Submenu,
  MenuItem,RadioGroup,RadioButton,MenuItemGroup ,
  Container,Aside,Header,Main,Footer
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
