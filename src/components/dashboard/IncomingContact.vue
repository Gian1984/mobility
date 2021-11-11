<template>
  <div class="flex flex-col mb-10 max-h-screen ">
    <h1 class="mt-10 mb-4 p-2 font-bold">Demandes de contact reçues</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-2">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          <div v-for="(item, index) in sortedContacts" :key="index" class="px-4 border-b-4 border-indigo-600">
            <div>
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="mt-2 py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Full name:
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{item.fullname}}
                  </dd>
                </div>
                <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Phone:
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{item.phone}}
                  </dd>
                </div>
                <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a class="inline-flex items-center border-2 bg-white rounded-full p-0.5 pr-1 hover:bg-gray-300" :href="`mailto: ${item.email}`">
                      <span class="px-2 py-0.5 leading-5 tracking-wide rounded-full">{{item.email}}</span>
                      <ChevronRightIcon class="ml-1 w-4 h-4 text-gray-500" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
                <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Received at:
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{item.time}}
                  </dd>
                </div>
                <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium text-gray-500">
                    Message:
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p class="text-gray-900 border-b p-1">{{item.subject}}</p>
                    <p class="text-gray-500 p-1">{{item.comment}}</p>
                  </dd>
                </div>
                <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <div>
                    <div class="inline ...">
                      <button v-if="item.was_answered == 0" type="button" @click="answer(index)"  class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50">
                        <MailIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button v-else type="button" @click="answer(index)"  class="inline-flex items-center px-2 py-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-green">
                        <CheckIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="ml-2 inline ...">
                      <button type="button" @click="removeContact(item.id, index)" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <TrashIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
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

  data() {
    return {
      contacts : []
    }
  },


  /*eslint-disable */
  beforeMount() {

      this.axios.get(process.env.VUE_APP_URL_API + 'api/contact/').then(response => {
        this.contacts = response.data
      })
          .catch(error => {
            console.log(error);
          })

  },

  computed: {
    sortedContacts: function() {
      this.contacts.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.contacts;
    }
  },

  methods: {
    answer(index) {
      let item = this.contacts[index]
      this.axios.patch(process.env.VUE_APP_URL_API + `api/contact/${item.id}/replied`).then(response => {
        this.contacts[index].was_answered = 1
        this.$forceUpdate()
      })
    },

    removeContact(contactID, index) {
      this.axios.delete(process.env.VUE_APP_URL_API + "api/contact/" + contactID)
          .then(response => {
          this.contacts.splice(index)
          })

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

}
</script>