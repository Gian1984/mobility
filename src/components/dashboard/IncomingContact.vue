<template>
  <div class="flex flex-col mb-10 max-h-screen ">
    <h1 class="mt-10 mb-4 p-2 font-bold">Demandes de contact reçues</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 border border-gray-900 pb-2">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 text-xs">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date / Heure
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Téléphone
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Question
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                A-t-on répondu ?
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Effacer
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item,index) in contacts" :key="item.id" >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class=" text-gray-900">{{item.time}}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div>
                  <div class="text-gray-900">
                    {{ item.fullname }}
                  </div>
                  <div class="text-gray-500">
                    {{ item.name }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class=" text-gray-900">{{item.phone}}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <a class="inline-flex items-center border-2 bg-white rounded-full p-0.5 pr-1 hover:bg-gray-300" :href="`mailto: ${item.email}`">
                  <span class="px-2 py-0.5 leading-5 tracking-wide rounded-full">{{item.email}}</span>
                  <ChevronRightIcon class="ml-1 w-4 h-4 text-gray-500" aria-hidden="true" />
                </a>
              </td>


                <div class="border border-black p-2 m-2">
                  <p class="text-gray-900 border-b p-1">{{item.subject}}</p>
                  <p class="text-gray-500 p-1">{{item.comment}}</p>
                </div>


              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button v-if="item.was_answered == 0" type="button" @click="answer(index)"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50">
                  Envoyé
                  <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
                <button v-else type="button" @click="answer(index)"  class="inline-flex items-center px-2 py-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-green">
                  <CheckIcon class="h-4 w-4" aria-hidden="true" />
                </button>

              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button type="button" @click="removeContact(item.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <TrashIcon class="h-5 w-5" aria-hidden="true" />
                </button>
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
import { MailIcon, TrashIcon, CheckIcon, ChevronRightIcon, ChevronDownIcon} from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { DotsVerticalIcon } from '@heroicons/vue/solid'




export default {


  /*eslint-disable */

  methods: {
    answer(index) {
      let item = this.contact[index]
      this.axios.patch(`http://localhost/api/contact/${item.id}/replied`).then(response => {
        this.contact[index].was_answered = 1
        this.$forceUpdate()
      })
    },

    removeContact(contactID, index) {
      this.axios.delete("http://localhost/api/contact/" + contactID)
          .then(response => this.contact.splice(index))

          .catch(error => {
            console.log(error);
          })
    },

  },

  components: {
    MailIcon,
    TrashIcon,
    CheckIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    DotsVerticalIcon,
  },

  computed: {

    contacts:{
      get(){
        return this.$store.state.contacts
      },
    }
  },


  created(){
        this.$store.dispatch('getContactList')
  },




}
</script>