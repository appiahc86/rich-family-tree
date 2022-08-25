import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
//services
import AirConditionView from '../views/services/AirConditionView.vue';
import LaptopsView from '../views/services/LaptopsView.vue';
import DecoderView from '../views/services/DecoderView.vue';
import FireAlarmView from '../views/services/FireAlarmView.vue';
import CCTVView from '../views/services/CCTVView.vue';
import LedView from '../views/services/LedView.vue';


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
        path: '/services/air-condition',
        name: 'air-condition',
        component: AirConditionView,
    },
    {
        path: '/services/laptops-and-computers',
        name: 'laptops-and-computers',
        component: LaptopsView,
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



]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;