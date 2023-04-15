import {createRouter,createWebHistory,RouterOptions,Router,RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Bag from '../views/Bag.vue'
import Clue from '../views/Clue.vue'
import Map from '../views/Map.vue'
import Any from '../views/Any.vue'
import PowerLose from '../components/power-lose.vue'
import Inc from '../components/power-inc.vue'
import Yimeow from '../components/yimeow.vue'
const routes : RouteRecordRaw[]=[
    {
        path:'/home',
        name:'home',
        component:Home,
    },
    {
        path:'/bag',
        name:'bag',
        component:Bag
    },
    {
        path:'/clue',
        name:'clue',
        component:Clue
    },
    {
        path:'/map',
        name:'map',
        component:Map
    },
    {
        path:'/any',
        name:'any',
        component:Any
    },
    {
        path:'/',
        name:'login',
        component:Login
    },
    {
        path:'/dec',
        name:'power-lose',
        component:PowerLose
    },
    {
        path:'/inc',
        name:'power-inc',
        component:Inc
    },
    {
        path:'/yimeow',
        name:'yimeow',
        component:Yimeow
    }
]

const options:RouterOptions={
    history:createWebHistory(),
    routes
}

const route : Router = createRouter(options)
export default route