<template>

  <div class="px-4 sm:px-6 lg:px-8">
    <AddUser v-show="!hideButton" :id="users.id"/>
    <div class="sm:flex sm:items-center" v-show="hideButton">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Usuários</h1>
        <p class="mt-2 text-sm text-gray-700">Lista de usuários cadastros no sistema.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent 
        bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" @click="newUser">
          Novo usuário
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col"  v-show="hideButton">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-80">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Nome
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Empresa</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">E-mail</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Data de cadastro
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Celular
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-220 bg-white">
                <tr v-for="person in users" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.name
                  }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.company }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.data }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.phone }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <router-link to="/edituser" class="text-indigo-600 hover:text-indigo-900" @click="editUser(person.id)">Editar<span class="sr-only"></span></router-link>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" class="text-red-600 hover:text-blue-900" @click="deleUser(person.id)">Excluir<span class="sr-only"></span></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AddUser from './pages/AddUser.vue'
export default {
  name: 'UsersApp',
  components:{
    AddUser
  },
  data() {
    return {
      users: [
        {id: 1, name: 'Fulano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva@example.com', data: '2022-01-05', phone:'9 999982' },
        {id: 2, name: 'Fulano da Silva 2', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva2@example.com', data: '2022-01-16', phone:'9 999982' },
        {id: 3, name: 'Fulano da Silva 3', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva3@example.com', data: '2022-01-27', phone:'9 999982' },
        {id: 4, name: 'Fulano da Silva 4', company: '', email: 'fulano.silva4@example.com', data: '2022-02-09', phone:'9 999982' },
        {id: 5, name: 'Beltrano da Silva', company: '', email: 'beltrano.silva@example.com', data: '2022-04-27', phone:'9 999982' },
        {id: 6, name: 'Beltrano da Silva 2', company: 'Guest Posts', email: 'beltrano.silva2@example.com', data: '2022-04-29', phone:'9 999982' },
        {id: 7, name: 'Beltrano da Silva 3', company: 'Guest Posts', email: 'beltrano.silva3@example.com', data: '2022-05-02', phone:'9 999982' },
        {id: 8, name: 'Beltrano da Silva 4', company: 'Guest Posts', email: 'beltrano.silva4@example.com', data: '2022-05-27', phone:'9 999982' },
      ],
      hideButton: true
    }
  },
  provide() {
    return {
      User: this.addUser,
      Edit: this.editUser
    }
  },
  methods: {
    newUser() {
      // this.$router.push('/newuser')
      this.hideButton = false
    },
    addUser(userName, userCompany, userEmail, data, phone) {
      const newUser = {
         id: new Date().toISOString(),
         name: userName,
         company: userCompany,
         email: userEmail,
         data: data,
         phone:phone
      }
      this.users.unshift(newUser)
      this.hideButton = true
    },
    deleUser(id){
      console.log(id)
      this.users = this.users.filter(user => user.id !== id )
    },
    editUser(id, name, email, company, date, phone){
      this.users = this.users.filter(user => {
        if(user.id === id){
        user.name = name,
        user.email = email,
        user.company = company,
        user.date = date,
        user.phone = phone
        }
      } )
    }
  }
}

</script>