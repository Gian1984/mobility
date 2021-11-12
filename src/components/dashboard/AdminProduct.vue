<template>

    <h1 class="mt-10 mb-4 p-2 font-bold">Modifier ou ajouter un produit</h1>






          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="(product,index) in products" v-bind:key="index">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-indigo-600 truncate">
                        {{ product.name }} <br>
                        Ref. n° {{ product.id }}
                      </p>
                      <div class="flex-shrink-0 h-10">
                        <img class="h-10 rounded-full" :src="product.image" alt="" />
                      </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="sm:flex">
                        <p class="flex items-center text-sm text-gray-500">
                          <MapIcon  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Prix / KM € <input v-model="product.pricekm" >
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <ClockIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                           Prix / Hour € <input v-model="product.pricehour" >
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          {{ product.description }}
                        </p>
                      </div>

                      <div class="sm:flex mt-2">
                        <button type="button" @click="editingItem = product"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Edit
                          <ExternalLinkIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
              </li>
            </ul>
          </div>

          <ProductModal @close="endEditing" :product="editingItem" v-show="editingItem != null"></ProductModal>
          <ProductModal @close="addProduct"  :product="addingProduct" v-show="addingProduct != null"></ProductModal>

        <button type="button" @click="newProduct"  class="mt-10 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Product
          <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
        </button>



</template>

<script>
import { ExternalLinkIcon, PlusCircleIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon, ClockIcon, MapIcon } from '@heroicons/vue/outline'
import ProductModal from '../dashboard/ProductModal.vue'



export default {
  data() {
    return {
      products: [],
      editingItem: null,
      addingProduct: null
    }
  },

  components: {
    ProductModal,
    ExternalLinkIcon,
    PlusCircleIcon,
    DocumentTextIcon,
    ClockIcon,
    MapIcon
  },


  beforeMount() {
    this.axios.get(process.env.VUE_APP_URL_API + 'api/products/').then(response => this.products = response.data)
  },
  methods: {
    newProduct() {
      this.addingProduct = {
        name: null,
        pricehour: null,
        pricekm: null,
        image: null,
        description: null,
      }
    },
    endEditing(product) {
      this.editingItem = null

      let index = this.products.indexOf(product)
      let name = product.name
      let pricehour = product.pricehour
      let pricekm = product.pricekm
      let description = product.description
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/products/${product.id}`, {name, pricehour, pricekm, description})
          .then(response => this.products[index] = product)
    },
    addProduct(product) {
      this.addingProduct = null

      let name = product.name
      let pricehour = product.pricehour
      let pricekm = product.pricekm
      let description = product.description
      let image = product.image

      this.axios.post(process.env.VUE_APP_URL_API + "api/products/", {name, pricehour, pricekm, description, image})
          .then(response => this.products.push(product))
    }
  },

}
</script>