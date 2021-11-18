<template>

  <div style="max-height: 200Vh">
    <div class="flex flex-col mb-10 max-h-screen ">
      <h1 class="mt-10 mb-4 p-4 font-bold text-3xl">Modifier ou ajouter un produit</h1>
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-2">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">



            <div class="bg-white">
              <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
                <div class="mx-auto divide-y-2 divide-gray-200">
                  <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                    <Disclosure as="div" v-for="(product,index) in products" v-bind:key="index" class="pt-6" v-slot="{ open }">
                      <dt class="text-lg">
                        <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                          <div class="text-sm text-gray-900">
                            <p class="text-sm font-medium text-indigo-600 truncate">
                              {{ product.name }} <br>
                              Ref. produit n° {{ product.id }}
                            </p>
                          </div>
                          <div class="justify-end flex">
                            <div class="ml-2 inline ... flex">
                              <button type="button" @click="editingItem = product"  class=" inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                              </button>
                            </div>
                            <span class="ml-6 h-7 flex items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                          </span>
                          </div>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" class="mt-2">
                        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl class="sm:divide-y sm:divide-gray-200">
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="flex text-sm font-medium text-gray-500">
                                  <MapIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  Prix / KM €
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <input v-model="product.pricekm" >
                                </dd>
                              </div>
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="flex text-sm font-medium text-gray-500">
                                  <ClockIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  Prix / Hour €
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <input v-model="product.pricehour" >
                                </dd>
                              </div>
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="flex  text-sm font-medium text-gray-500">
                                  <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  Description
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {{ product.description }}
                                </dd>
                              </div>
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="flex text-sm font-medium text-gray-500">
                                  <PhotographIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                  Photo
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <div class="flex-shrink-0 h-10">
                                    <img class="h-10 rounded-full" :src="product.image" alt="car-photo" />
                                  </div>
                                </dd>
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
            <ProductModal @close="endEditing" :product="editingItem" v-show="editingItem != null"></ProductModal>
            <ProductModal @close="addProduct"  :product="addingProduct" v-show="addingProduct != null"></ProductModal>
          </div>
          <button type="button" @click="newProduct"  class="ml-4 mt-5 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Product
            <PlusCircleIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { PlusCircleIcon,PencilAltIcon, DocumentTextIcon, ClockIcon, MapIcon, ChevronDownIcon, PhotographIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
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
    PlusCircleIcon,
    DocumentTextIcon,
    ClockIcon,
    MapIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    PhotographIcon,
    PencilAltIcon
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
      let image = product.image
      /*eslint-disable */
      this.axios.put(process.env.VUE_APP_URL_API + `api/products/${product.id}`, {name, pricehour, pricekm, description, image})
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