import Vue from 'vue'
import App from './App.vue'
import { Button,Pagination,MessageBox,Message,container,Input,Select,Dialog,Option,Switch,DatePicker,header, main, menu,Form,FormItem ,Submenu, MenuItem, MenuItemGroup, Aside, Dropdown, DropdownItem, DropdownMenu, Row, Card, Col, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index'
import './assets/less/index.less'
import store from './store/index'
import http from 'axios'
import '../api/mock.js'
Vue.config.productionTip = false
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Button)
Vue.use(container)
Vue.use(header)
Vue.use(main)
Vue.use(menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Aside)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)

Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$http = http
Vue.prototype.$message = Message

// router.beforeEach((to,form,next)=>{
//   store.commit('getToken')
//   const token = store.state.user.token
//   if(!token && to.name !== 'login' ){
//     next({name:'login'})
//   }else{
//     next()
//   }
// })
const vm = new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')

console.log(vm);
