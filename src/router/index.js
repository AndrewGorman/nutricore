import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/counseling',
            name: 'counseling',
            component: () => import(/* webpackChunkName: "about" */ '../views/Counseling.vue')
        }
    ],

    router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    });

export default router;
