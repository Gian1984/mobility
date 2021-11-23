<template>

  <div class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
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
                    <h5 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span>Modifier ou ajouter</span><br>
                      <span class="text-indigo-600">vos produits.</span>
                    </h5>

                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                    <div class="sm:col-span-2 ">
                      <div class="flex justify-between">
                        <label for="name" class="block text-xs text-gray-700">Name :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.name" name="name" id="name" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: Business Class" />
                      </div>
                    </div>


                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="pricekm" class="block text-xs text-gray-700">Prix Km :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.pricekm" name="pricekm" id="pricekm" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: 2.4" />
                      </div>
                    </div>


                    <div class="sm:col-span-2">
                      <div class="flex justify-between ">
                        <label for="pricehour" class="block text-xs text-gray-700">Prix Max Km :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.pricehour" name="pricehour" id="pricehour" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: 60" />
                      </div>
                    </div>


                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="kmhours" class="block text-xs text-gray-700">N° km par heures :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.kmhours" name="kmhours" id="kmhours" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: 20" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="luggage" class="block text-xs text-gray-700">N° des bagages :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.luggage" name="pricekm" id="luggage" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: 1" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label for="passengers" class="block text-xs text-gray-700">N° des passagers:</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.passengers" name="pricekm" id="passengers" class="mt-1 text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" placeholder="Ex: 1" />
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <div class="flex justify-between">
                        <label for="description" class="block text-xs text-gray-700">Description :</label>
                      </div>
                      <div class="mt-1">
                        <textarea v-model="data.description" class="text-xs block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-xs" rows="3" placeholder="Ex: Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS ou similaire"></textarea>
                      </div>
                    </div>

                    </div>

                    <div>
                      <div class="flex justify-between">
                        <label for="photo" class="block text-xs font-medium text-gray-700 mt-2">Photo :</label>
                      </div>
                      <div class="mt-1 sm:border-t sm:border-gray-200 sm:pt-5">
                        <div class="flex justify-center max-w-12">
                          <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                              <div class="mt-1 flex justify-center max-w-7">
                                <img :src="data.image" v-show="data.image != null" class="w-1/4" alt="car-image">
                              </div>
                              <div class="flex text-sm text-gray-600 justify-center">
                                <label class="custom-file-upload inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  <input type="file" id="file" @change="attachFile"/>
                                  Upload
                                </label>
                              </div>
                              <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">
                      <button type="button" @click="uploadFile(data.id)" class="inline-flex items-center px-4 py-2 border border-transparent text-xs rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Envoyer
                      </button>
                      <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-xs rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
  props: ['product'],
  data() {
    return {
      attachment: null
    }
  },
  computed: {
    data: function() {
      if (this.product != null) {
        return this.product
      }
      return {
        attachment: null,
        name: "",
        pricekm: "",
        pricehours: "",
        description: "",
        passengers:"",
        luggage:"",
        kmhours:"",
        image: false
      }
    }
  },
  /*eslint-disable */
  methods: {
    attachFile(event) {
      this.attachment = event.target.files[0];
      console.log(this.attachment)
    },
    uploadFile(id) {
      if (this.attachment != null) {
        let formData = new FormData();
        formData.append("image", this.attachment)
        let headers = {'Content-Type': 'multipart/form-data'}
        this.axios.post(process.env.VUE_APP_URL_API + `api/upload-file`, formData, {headers}).then(response => {
          this.product.image = response.data
          this.$emit('close', this.product)
        })
      } else {
        this.$emit('close', this.product)
      }
    },
    close(){
      this.$emit('close', this.product)
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
