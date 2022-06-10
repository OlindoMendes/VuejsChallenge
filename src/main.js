import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import './css/app.css';

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: () => import('./components/pages/HomeApp.vue'),
    },
    { 
        path: '/users', 
        name: 'users', 
        component: () => import('./components/UsersApp.vue') 
    },
    { 
        path: '/company', 
        name: 'company', 
        component: () => import('./components/pages/CompanyApp.vue') 
    },
    { 
        path: '/edituser', 
        name: 'edit', 
        component: () => import('./components/pages/EditUser.vue') 
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
    linkActiveClass: 'link-active',
})

createApp(App).use(router).mount('#app')
