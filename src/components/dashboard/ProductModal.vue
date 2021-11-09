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
                    <h5 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span class="block xl:inline">Modify or add</span>
                      {{ ' ' }}
                      <span class="block text-indigo-600 xl:inline">your products.</span>
                    </h5>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                      Here you can modify all about your products.
                    </p>
                    <div class="mt-5">
                      <div class="flex justify-between">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.name" name="name" id="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Ex: shoes" />
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between">
                        <label for="pricehour" class="block text-sm font-medium text-gray-700 mt-2">Price Hour :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.pricehour" name="pricehour" id="pricehour" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Ex: 200" />
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between">
                        <label for="pricekm" class="block text-sm font-medium text-gray-700 mt-2">Price Km :</label>
                      </div>
                      <div class="mt-1">
                        <input type="text" v-model="data.pricekm" name="pricekm" id="pricekm" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Ex: 200" />
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between">
                        <label for="description" class="block text-sm font-medium text-gray-700 mt-2">Description :</label>
                      </div>
                      <div class="mt-1">
                        <textarea v-model="data.description" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" rows="3" placeholder="Enter description."></textarea>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between">
                        <label for="photo" class="block text-sm font-medium text-gray-700 mt-2">Photo :</label>
                      </div>
                      <div class="mt-1 flex justify-center max-w-12">

                           <img :src="data.image" v-show="data.image != null" class="w-1/2">

                      </div>
                      <div class="text-center mt-2">

                        <label class="ml-5 custom-file-upload inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <input type="file" id="file" @change="attachFile"/>
                          Upload
                        </label>

                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">
                      <button type="button" @click="uploadFile" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Done
                      </button>
                      <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Leave
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
        name: "",
        pricekm: "",
        pricehours: "",
        description: "",
        image: false
      }
    }
  },
  /*eslint-disable */
  methods: {
    attachFile(event) {
      this.attachment = event.target.files[0];
    },
    uploadFile(event) {
      if (this.attachment != null) {
        let formData = new FormData();
        formData.append("image", this.attachment)
        let headers = {'Content-Type': 'multipart/form-data'}
        this.axios.post(process.env.VUE_APP_URL_API + "api/upload-file", formData, {headers}).then(response => {
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
