import {createRouter,createWebHistory,RouterOptions,Router,RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const routes : RouteRecordRaw[]=[
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/',
        name:'login',
        component:Login
    }
]

const options:RouterOptions={
    history:createWebHistory(),
    routes
}

const route : Router = createRouter(options)
export default route