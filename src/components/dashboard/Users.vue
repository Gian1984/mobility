<template>

  <h1 class="mt-10 mb-4 p-2 font-bold">Modifier un outilisateur</h1>






  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(user,index) in users" v-bind:key="index">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate">
              {{ user.firstname }} {{ user.lastname}}<br>
              Ref. n° {{ user.id }}
            </p>
            <div class="flex-shrink-0 h-10">

            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                <MapIcon  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Prix / KM €
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <ClockIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Prix / Hour € <input v-model="user.firstname" >
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {{ user.lastname }}
              </p>
            </div>

            <div class="sm:flex mt-2">
              <div>
                <button type="button" @click="editingItem = user"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                  <ExternalLinkIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div class="ml-2 mt-2 lg:mt-0">
                <button type="button" @click="removeUser(user.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <TrashIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <UserModal @close="endEditing" :user="editingItem" v-show="editingItem != null"></UserModal>



</template>

<script>
import { ExternalLinkIcon,TrashIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon, ClockIcon, MapIcon } from '@heroicons/vue/outline'
import UserModal from '../dashboard/UserModal.vue'



export default {
  data() {
    return {
      users: [],
      editingItem: null,
    }
  },

  components: {
    UserModal,
    ExternalLinkIcon,
    DocumentTextIcon,
    ClockIcon,
    MapIcon,
    TrashIcon
  },


  beforeMount() {
    this.axios.get(process.env.VUE_APP_URL_API + 'api/users/').then(response => this.users = response.data)
  },
  methods: {

    endEditing(user) {
      this.editingItem = null

      let index = this.users.indexOf(user)
      let firstname = user.firstname
      let lastname = user.lastname
      let email = user.email
      let phone = user.phone
      let streetaddress = user.streetaddress
      let city = user.city
      let region = user.region
      let country = user.country
      let zip = user.zip
      let is_admin = user.is_admin
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/users/${user.id}`,
          {
            firstname,
            lastname,
            email,
            phone,
            streetaddress,
            city,
            region,
            country,
            zip,
            is_admin,
          })
          .then(response => this.users[index] = user)
    },

    removeUser(userID, index){


      this.axios.delete(process.env.VUE_APP_URL_API + "api/users/"+ userID)
          .then( response => this.users.splice(index, 1))

          .catch(error =>{
            console.log(error);
          })
    },
  },

}
</script>