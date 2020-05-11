import Vue from 'vue';
import VueRouter from "vue-router";
import home from '@/components/home'
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'home',
        component: home
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: require('../components/portfolio.vue').default
    },
    {
        path: '/blog',
        name: 'blog',
        component: require('../components/blog').default
    },
    {
        path: '/about',
        name: 'about',
        component: require('../components/about').default
    },
    {
        path: '/contact',
        name: 'contact',
        component: require('../components/contact').default
    }
    ];

const router = new VueRouter(
    {
        mode:'history',
        base: process.env.BASE_URL,
        routes
    }
);

export default router;
