<template>

  <h1 class="mt-10 mb-4 p-2 font-bold">Modifier un utilisateur</h1>


  <!--  start search box-->

  <label for="first-name" class="mt-5 block text-sm font-medium text-gray-700">
    Recherche par adresse e-mail
  </label>
  <input type="search" v-model="searchQuery" name=""  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />

  <div>
    <p class="mb-2 text-right" v-if="searchQuery && filterUsers.length > 1 ">{{filterUsers.length}} results</p>
    <div v-if="!searchQuery"></div>
    <div v-else class="border-2 border-red-600 mt-2">


      <div class="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div class="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
          <div class="mx-auto divide-y-2 divide-gray-200">
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
              <Disclosure as="div" v-for="user in filterUsers" v-bind:key="user.id" class="pt-6" v-slot="{ open }">
                <dt class="text-lg">
                  <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-indigo-600 truncate">
                        <span class="text-black">Name : </span>{{ user.firstname }} {{ user.lastname}}<br>
                        <span class="text-black">Ref. n° : </span>{{ user.id }} <span class="text-black">- Email : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${user.email}`"><input v-model="user.email"/></a><br>
                        <span class="text-black">Phone : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... p-0.5 pr-1 hover:text-gray-700" :href="`tel: ${user.phone}`"><input v-model="user.phone"/></a>
                      </p>
                    </div>
                    <span class="ml-6 h-7 flex items-center">
                          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                        </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" class="mt-2">
                  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Détail du client
                      </h3>
                    </div>
                    <div class="border-t border-gray-200">
                      <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Est-il administrateur ?
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {{user.is_admin == 1? "Oui" : "No"}}
                                </span>
                          </dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Adresse
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul>
                              <li>
                                <input class="bg-gray-50" v-model="user.streetaddress">,<input class="bg-gray-50" v-model="user.zip">
                              </li>
                              <li>
                                <input class="bg-gray-50" v-model="user.city">
                              </li>
                              <li>
                                <input class="bg-gray-50" v-model="user.region">
                              </li>
                              <li>
                                <input class="bg-gray-50" v-model="user.country">
                              </li>
                            </ul>
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">


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
                      </dl>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <div class="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
      <div class="mx-auto divide-y-2 divide-gray-200">
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="(user,index) in users" v-bind:key="index" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-indigo-600 truncate">
                    <span class="text-black">Name : </span>{{ user.firstname }} {{ user.lastname}}<br>
                    <span class="text-black">Ref. n° : </span>{{ user.id }} <span class="text-black">- Email : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${user.email}`"><input v-model="user.email"/></a><br>
                    <span class="text-black">Phone : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... p-0.5 pr-1 hover:text-gray-700" :href="`tel: ${user.phone}`"><input v-model="user.phone"/></a>
                  </p>
                </div>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2">
              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Détail du client
                  </h3>
                </div>
                <div class="border-t border-gray-200">
                  <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                        Est-il administrateur ?
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {{user.is_admin == 1? "Oui" : "No"}}
                        </span>
                      </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                        Adresse
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul>
                          <li>
                            <input class="bg-gray-50" v-model="user.streetaddress">,<input class="bg-gray-50" v-model="user.zip">
                          </li>
                          <li>
                            <input class="bg-gray-50" v-model="user.city">
                          </li>
                          <li>
                            <input class="bg-gray-50" v-model="user.region">
                          </li>
                          <li>
                            <input class="bg-gray-50" v-model="user.country">
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">


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
                  </dl>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>

  <UserModal @close="endEditing" :user="editingItem" v-show="editingItem != null"></UserModal>



</template>

<script>
import { ExternalLinkIcon,TrashIcon, ChevronDownIcon ,  } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import UserModal from '../dashboard/UserModal.vue'



export default {
  data() {
    return {
      users: [],
      editingItem: null,
      facet: [],
      searchQuery: null,
    }
  },

  components: {
    UserModal,
    ExternalLinkIcon,
    ChevronDownIcon,
    TrashIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },


  beforeMount() {
    this.axios.get(process.env.VUE_APP_URL_API + 'api/users/').then(response => this.users = response.data)
  },


  computed: {

    filterUsers() {
      return this.users.filter(result => {
        console.log(result)

        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.email.match(myRegex) || result.email.match(myRegex))
        }
        return (result.email.match(myRegex) || result.email.match(myRegex)) && (resultFacet.includes(result.id));
      })
    },
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