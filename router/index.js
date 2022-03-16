import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from'../views/Main.vue'
import User from '../views/user'
import home from '../views/home'
import Mall from '../views/mall'
import pageOne from '../views/other/pageOne'
import pageTwo from '../views/other/pageTwo'
import login from '../views/login/Login'
Vue.use(VueRouter)

const routes = [
    {
        name:'Main',
        path:'/',
        component:Main,
        children:[
            {
                path:'home',
                name:'home',
                component:home
            },
            {
                name:'user',
                path:'user',
                component:User
            },
            {
                name:'mall',
                path:'mall',
                component:Mall
            },
            {
                name:'page1',
                path:'page1',
                component:pageOne
            },
            {
                name:'page2',
                path:'page2',
                component:pageTwo
            }
        ]
    },
    {
       path:'/login',
       name:"login",
       component:login

    }
    
]
export default new VueRouter({
    mode:'history',
    routes
})