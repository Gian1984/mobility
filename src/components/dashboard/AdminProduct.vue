<template>
  <div class="flex flex-col">
    <h1 class="mt-10 p-2 font-bold">Product adding & modify</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(product,index) in products" v-bind:key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="product.image" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Product ref. n° {{ product.id }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ product.name }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap max-w-xl">
                <div class="text-sm text-gray-900 text-sm truncate ...">{{ product.description }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-2xs text-gray-500">
                € <input v-model="product.price" >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input v-model="product.units" >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button type="button" @click="editingItem = product"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                  <ExternalLinkIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <ProductModal @close="endEditing" :product="editingItem" v-show="editingItem != null"></ProductModal>
          <ProductModal @close="addProduct"  :product="addingProduct" v-show="addingProduct != null"></ProductModal>
        </div>
        <button type="button" @click="newProduct" class="m-5 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New Product
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import { ExternalLinkIcon } from '@heroicons/vue/outline'
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
  },


  beforeMount() {
    this.axios.get('http://localhost/api/products/').then(response => this.products = response.data)
  },
  methods: {
    newProduct() {
      this.addingProduct = {
        name: null,
        units: null,
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
      let units = product.units
      let pricehour = product.pricehour
      let pricekm = product.pricekm
      let description = product.description
      /*eslint-disable */
      this.axios.put(`http://localhost/api/products/${product.id}`, {name, units, pricehour, pricekm, description})
          .then(response => this.products[index] = product)
    },
    addProduct(product) {
      this.addingProduct = null

      let name = product.name
      let units = product.units
      let pricehour = product.pricehour
      let pricekm = product.pricekm
      let description = product.description
      let image = product.image

      this.axios.post("http://localhost/api/products/", {name, units, pricehour, pricekm, description, image})
          .then(response => this.products.push(product))
    }
  },

}
</script>