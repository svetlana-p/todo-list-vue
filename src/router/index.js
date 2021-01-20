import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AboutUs from '@/views/AboutUs.vue'
import Information from '@/views/Information.vue'
import Lists from '@/views/Lists.vue'
import ListItem from '@/views/ListItem.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: AboutUs
    },
    {
        path: '/info',
        name: 'Info',
        component: Information
    },
    {
        path: '/lists',
        name: 'Lists',
        component: Lists
    },
    {
        path: '/list/:url',
        name: 'List Item',
        component: ListItem
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router