import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
//services
import DecoderView from '../views/services/DecoderView.vue';
import FireAlarmView from '../views/services/FireAlarmView.vue';
import CCTVView from '../views/services/CCTVView.vue';
import LedView from '../views/services/LedView.vue';
import ElectricFenceView from '../views/services/ElectricFenceView.vue';
import LaptopsAndComputersView from '../views/services/LaptopsAndComputersView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },

    //....................services.........................

    {
        path: '/services/laptops-and-computers',
        name: 'laptops-and-computers',
        component: LaptopsAndComputersView,
    },
    {
        path: '/services/decoder-antenna',
        name: 'decoder-antenna',
        component: DecoderView,
    },
    {
        path: '/services/fire-alarm-system',
        name: 'fire-alarm-system',
        component: FireAlarmView,
    },
    {
        path: '/services/cctv-cameras',
        name: 'cctv-cameras',
        component: CCTVView,
    },
    {
        path: '/services/led-3d-billboard',
        name: 'led-3d-billboard',
        component: LedView,
    },
    {
        path: '/services/electric-fence',
        name: 'electric-fence',
        component: ElectricFenceView,
    },

//    redirect to home page if route not found
    {
        path: '/:catchAll(.*)*',
        redirect: {name: 'home'}
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }
        }
    }

})


export default router;