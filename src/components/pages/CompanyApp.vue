<template>
<div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-80">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Nome
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Qtd funcionários</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">País</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Categoria
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-220 bg-white">
                <tr v-for="company in companies" :key="company.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ company.name
                  }}</td>
                  <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ company.name }}</td> -->
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ company.numbeEmployees }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ company.country }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ company.category }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Editar<span class="sr-only">, {{
    
                    }}</span></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'CompanyApp',
    data(){
        return {
            companies:[],
        }
    },
    mounted(){
        this.getCompany()
    },
     methods:{
         async getCompany(){
             await axios.get('http://localhost:3000/company')
            .then(response =>{
                this.companies = response.data
                console.log(this.company)
            } )
        }
    }
    
}
</script>