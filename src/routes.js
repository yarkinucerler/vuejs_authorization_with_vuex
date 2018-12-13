/* Vendor Libs Begin */
import Vue from "vue";
import VueRouter from "vue-router";
/* Vendor Libs End  */

/* Custom Component Begin */
import Login from './components/Login.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';
import Profile from './components/Dashboard/Profile.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import MyQRCodes from './components/Dashboard/MyQRCodes.vue';
import MyOpportunities from './components/Dashboard/MyOpportunities.vue';
import CreateOpportunities from './components/Dashboard/CreateOpportunities.vue';
/* Custom Component End  */

const Routes = [
    { path: '/', component: About },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard, children: [
            { path: '', redirect: 'myopportunities' },
            { path: 'myopportunities', component: MyOpportunities },
            { path: 'createopportunuties', component: CreateOpportunities },
            { path: 'qrcodes', component: MyQRCodes },
            { path: 'profile', component: Profile },
        ]
    },
];

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

export default router;