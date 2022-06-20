import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios'
import './css/app.css';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/pages/HomeApp.vue'),
    },
    {
        path: '/users/:id/edit',
        name: 'edituser',
        component: () => import('./components/pages/EditUser.vue'),
        params: true
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('./components/UsersApp.vue')
    },
    {
        path: '/users/newuser',
        name: 'newuser',
        component: () => import('./components/pages/AddUser.vue')
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('./components/pages/CompanyApp.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'link-active',
})

// Create a new store instance.
const store = createStore({
    state() {
        return {
            users: [
                { id: 1, name: 'Fulano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva@example.com', data: '2022-01-05', phone: '9 999982' },
                { id: 2, name: 'Fulano da Silva 2', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva2@example.com', data: '2022-01-16', phone: '9 999982' },
                { id: 3, name: 'Fulano da Silva 3', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva3@example.com', data: '2022-01-27', phone: '9 999982' },
                { id: 4, name: 'Fulano da Silva 4', company: '', email: 'fulano.silva4@example.com', data: '2022-02-09', phone: '9 999982' },
                { id: 5, name: 'Beltrano da Silva', company: '', email: 'beltrano.silva@example.com', data: '2022-04-27', phone: '9 999982' },
                { id: 6, name: 'Beltrano da Silva 2', company: 'Guest Posts', email: 'beltrano.silva2@example.com', data: '2022-04-29', phone: '9 999982' },
                { id: 7, name: 'Beltrano da Silva 3', company: 'Guest Posts', email: 'beltrano.silva3@example.com', data: '2022-05-02', phone: '9 999982' },
                { id: 8, name: 'Beltrano da Silva 4', company: 'Guest Posts', email: 'beltrano.silva4@example.com', data: '2022-05-27', phone: '9 999982' },
            ],
            companies: []
        }
    },
    mutations: {
        ADD_USER(state, newuser) {
            state.users.unshift(newuser)
        },
        DELETE_USER(state, ID) {
            state.users = state.users.filter(user => {
                return user.id !== ID
            })
        },
        EDIT_USER(state, ){
            state.users
        }
    },
    getters: {
        async getCompany(state) {
            await axios.get('http://localhost:3000/company')
                .then(response => {
                    return state.companies = response.data
                })
        },
        getUsers(state) {
            return state.users
        }

    },
    actions: {
        addUser({ commit }, user) {
            console.log('new ', user)
            commit('ADD_USER', user)
        },
        deleteUser({ commit }, id) {
            commit('DELETE_USER', id)
        },

    },
})


createApp(App).use(router).use(store).mount('#app')
