<template>
    <div class="mt-8 flex flex-col">
        <form @submit.prevent="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Nome
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" v-model="userData.name" placeholder="Nome">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="company">
                    Empresa
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company" type="text" v-model="userData.company" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    E-mail
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" v-model="userData.email" placeholder="E-mail">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Celular
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone" type="text" v-model.number="userData.phone" placeholder="Celular">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                    Data de cadastro
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date" type="date" v-model="userData.data" placeholder="Data">
            </div>


            <router-link :to="'/users'" class="inline-flex items-center justify-center rounded-md border border-transparent 
bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                Salvar
            </router-link>


        </form>
    </div>
            <AddUser/>
</template>
<script>
import { mapState } from 'vuex'
import AddUser from './AddUser.vue'
export default {
    components:{
        AddUser
    },
    mounted() {
        this.userData
    },
    computed: {
        ...mapState(['users']),
        userData() {
            return this.users.find(user => user.id == this.$route.params.id)
        }
    },
    methods: {
        onSubmit() {
            const user = this.userData
            this.users[user] = this.users
        }
    }
}
</script>