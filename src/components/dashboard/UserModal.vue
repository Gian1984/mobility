<template>

  <div class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="mt-30 relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-200">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>
        <!--body-->
        <div class="relative p-6 flex-auto">

          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-body">
                  <h5 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
                    <span class="block">Modifier</span>

                    <span class="block text-indigo-600">vos utilisateurs.</span>
                  </h5>
                  <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Ici, vous pouvez tout modifier sur vos utilisateurs.
                  </p>
                  <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="firstname" class="block text-xs font-medium text-gray-700">Prénom :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.firstname" name="firstname" id="firstname" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="lastname" class="block text-xs font-medium text-gray-700">Nom de famille :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.lastname" name="lastname" id="lastname" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="email" class="block text-xs font-medium text-gray-700">Email :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.email" name="email" id="email" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="phone" class="block text-xs font-medium text-gray-700">Phone :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.phone" name="phone" id="phone" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="streetaddress" class="block text-xs font-medium text-gray-700">Adresse :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.streetaddress" name="streetaddress" id="streetaddress" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="zip" class="block text-xs font-medium text-gray-700">Code postal :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.zip" name="zip" id="zip" class="text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs"/>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="city" class="block text-xs font-medium text-gray-700">
                          Ville :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.city" name="city" id="city" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs"/>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="region" class="block text-xs font-medium text-gray-700">Région / Province :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.region" name="region" id="region" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs"/>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="country" class="block text-xs font-medium text-gray-700">Pays :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.country" name="country" id="country" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-xs"/>
                      </div>
                    </div>



                    <div v-if="data.is_admin==0" class="sm:col-span-6">
                      <div class="flex justify-between">
                        <label for="checkbox" class="block text-xs font-medium text-gray-700 mt-2">Is Admin ?</label>
                      </div>
                      <div class="mt-1">
                        <input v-model="data.is_admin"  name="make-admin" type="checkbox" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span class="ml-2 text-sm">Cochez cette case pour rendre l'utilisateur administrateur</span>
                      </div>
                    </div>

                    <div v-else class="sm:col-span-6">
                      <div class="flex justify-between">
                        <label for="checkbox" class="block text-xs font-medium text-gray-700 mt-2">Is Admin ?</label>
                      </div>
                      <div class="mt-1">
                        <button type="button" @click="data.is_admin = 0" class="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Désactiver la modalité d'administration
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="modal-footer">
                  <slot name="footer">
                    <button type="button" @click="uploadFile" class="inline-flex items-center px-4 py-2 border border-transparent text-xs rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Envoyer
                    </button>
                    <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-xs font-medium rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Quitter
                    </button>
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>

import { XIcon } from '@heroicons/vue/outline'

export default {
  props: ['user'],
  data() {
    return {
      attachment: null
    }
  },
  computed: {
    data: function() {
      if (this.user != null) {
        return this.user
      }
      return {
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        streetaddress:"",
        city:"",
        region:"",
        country:"",
        zip:"",
        is_admin:"",
      }
    }
  },
  /*eslint-disable */
  methods: {
    uploadFile() {
        this.$emit('close', this.user)
    },
    close(){
      this.$emit('close', this.user)
    }
  },
  components:{
    XIcon
  }
}
</script>

<style>

input[type="file"] {
  display: none;
}

</style>