<template>

  <div class="flex flex-col" style="max-height: 200Vh">
    <h1 class="mt-10 font-bold text-3xl px-4">Commandes actives</h1>

<!--  start search box-->

    <div class="px-4">
      <label for="first-name" class="mt-5 block text-sm font-medium text-gray-700">
        Recherche par identifiant de commande
      </label>
      <input type="search" v-model="searchQuery" name=""  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter a search here!" />
    </div>

    <div>
      <p class="mb-2 text-right" v-if="searchQuery && filterOrders.length > 1 ">{{filterOrders.length}} results</p>
      <div v-if="!searchQuery"></div>

      <div v-else class="border-2 border-red-600 mt-2 overflow-hidden">
        <div v-for="order in filterOrders" :key="order.id" class="py-3 border-b-4 border-indigo-600 mb-2" >
          <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
            <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
              <div class="sm:flex lg:col-span-7 border-b ">
                <div class="flex-shrink-0 w-full rounded-lg overflow-hidden sm:aspect-none sm:w-40">
                  <img :src="order.product.image" class="w-full  object-center object-cover sm:w-full" />
                </div>

                <div class="mt-6 sm:mt-0 sm:ml-6">
                  <h1 class="text-base font-xlarge text-gray-900">
                    Commande n° {{ order.id }}
                  </h1>
                  <p class="text-gray-500 font-medium">{{order.product.name}}</p>
                </div>
              </div>


              <div class="sm:flex lg:col-span-7 mt-5">
                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                  <div>
                    <dt class="font-medium text-gray-900">Flight info:</dt>
                    <dd class="text-gray-500">
                      <span class="block">{{ order.flight}}</span>
                    </dd>
                    <dt class="font-medium text-gray-900 mt-3">Passager supplémentaire:</dt>
                    <dd class="text-gray-500">
                      <span class="block">{{order.firstname}} {{order.lastname}}</span>
                      <span class="block">Phone: {{order.phone}}</span>
                      <span class="block">Email: {{order.email}}</span>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Pick up sign:</dt>
                    <dd class="text-gray-500 space-y-3">
                      <p>
                        {{ order.pickupsign}}
                      </p>
                    </dd>
                    <dt class="mt-3 font-medium text-gray-900">Reference code:</dt>
                    <dd class="text-gray-500 space-y-3">
                      <p>
                        {{ order.referencecode }}
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>


              <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                  <div>
                    <dt class="font-medium text-gray-900">Pick-up address:</dt>
                    <dd class="text-gray-500">
                      <span class="block">{{ order.pickupaddress }}</span>
                    </dd>
                    <dt class="font-medium text-gray-900 mt-3">Drop-off address:</dt>
                    <dd class="text-gray-500">
                      <span class="block">{{ order.dropoffaddress}}</span>
                    </dd>
                    <dt class="font-medium text-gray-900 mt-3">Notes:</dt>
                    <dd class="text-gray-500">
                      <span class="block">{{ order.notes}}</span>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Pick-up date & time:</dt>
                    <dd class="text-gray-500 space-y-3">
                      <p>
                        {{ moment(order.date).format("dddd MMMM DD, YYYY [at] HH:mm a") }}
                      </p>
                    </dd>
                    <dt class="mt-3 font-medium text-gray-900">Distance:</dt>
                    <dd class="text-gray-500 space-y-3">
                      <p>
                        {{ order.distance }}
                      </p>
                    </dd>
                    <dt class="mt-3 font-medium text-gray-900">Duration:</dt>
                    <dd class="text-gray-500 space-y-3">
                      <p>
                        {{ order.duration }}
                      </p>
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt class="font-medium text-gray-900">User account:</dt>
                <dd class="mt-3 text-gray-500">
                  <span class="block">{{ order.user.firstname }} {{ order.user.lastname }}</span>
                  <span class="block">{{ order.user.streetaddress }}, {{ order.user.zip }}</span>
                  <span class="block">{{ order.user.city }} - {{ order.user.region }} </span>
                  <span class="block">{{ order.user.country }}</span>
                  <span class="block">{{ order.user.phone }}</span>
                  <span class="block">{{ order.user.email}}</span>
                </dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">Informations de paiement:</dt>
                <div class="mt-3">
                  <dd class="-ml-4 -mt-4 flex flex-wrap">

                    <div class="ml-4 mt-4">
                      <p class="text-gray-500">
                        <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                      </p>
                      <p class="text-gray-500">
                        Brand:  <span class="uppercase">{{ order.cardBrand }}</span>
                      </p>
                      <p class="text-gray-500">
                        Termine par: {{ order.lastFour }}
                      </p>
                      <p class="text-gray-500">
                        Expire: {{order.expire}}
                      </p>
                    </div>
                  </dd>
                </div>
              </div>
            </dl>

            <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
              <div class="pt-4 flex items-center justify-between">
                <dt class="font-medium text-gray-900">ID transaction:</dt>
                <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
              </div>
              <div class="pt-4 flex items-center justify-between">
                <dt class="font-medium text-gray-900">Total de la commande</dt>
                <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

    </div>

    <!--  end search box-->

    <div class="-my-2 overflow-x-auto lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <main class="mx-auto">
            <div class="bg-gray-50">
              <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
                <div class="mx-auto divide-y-2 divide-gray-200">
                  <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                    <Disclosure as="div" v-for="order in sortedOrders" :key="order.id" class="pt-6" v-slot="{ open }">
                      <dt class="text-lg">
                        <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                          <p class="text-sm font-medium text-indigo-600 truncate">
                            <span class="text-black">Commande n° : </span>{{ order.id }}<br>
                            <span class="text-black">Pick up time : </span>{{ moment(order.date).format("llll") }}<br>
                            <span class="text-black">Email : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${order.user.email}`"><input v-model="order.user.email"/></a><br>
                            <span class="text-black">Phone : </span> <a class="pr-2 pl-2 inline-flex items-center underline ... p-0.5 pr-1 hover:text-gray-700" :href="`tel: ${order.user.phone}`"><input v-model="order.user.phone"/></a>
                          </p>
                          <span class="ml-6 h-7 flex items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" class="mt-2">
                        <div class="py-3 border-b-4 border-indigo-600 " >
                          <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
                            <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                              <div class="sm:flex lg:col-span-7 border-b ">
                                <div class="flex-shrink-0 w-full rounded-lg overflow-hidden sm:aspect-none sm:w-40">
                                  <img :src="order.product.image" class="w-full  object-center object-cover sm:w-full" />
                                </div>
                                <div class="mt-6 sm:mt-0 sm:ml-6">
                                  <h1 class="text-base font-xlarge text-gray-900">
                                    Référence de l'achat n° {{ order.id }}
                                  </h1>
                                  <p class="text-gray-500 font-medium">{{order.product.name}}</p>
                                </div>
                              </div>
                              <div class="sm:flex lg:col-span-7 mt-5">
                                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                  <div>
                                    <dt class="font-medium text-gray-900">Flight info:</dt>
                                    <dd class="text-gray-500">
                                      <span class="block">{{ order.flight}}</span>
                                    </dd>
                                    <dt class="font-medium text-gray-900 mt-3">Passager supplémentaire:</dt>
                                    <dd class="text-gray-500">
                                      <span class="block">{{order.firstname}} {{order.lastname}}</span>
                                      <span class="block">Phone: {{order.phone}}</span>
                                      <span class="block">Email: {{order.email}}</span>
                                    </dd>
                                  </div>
                                  <div>
                                    <dt class="font-medium text-gray-900">Pick up sign:</dt>
                                    <dd class="text-gray-500 space-y-3">
                                      <p>
                                        {{ order.pickupsign}}
                                      </p>
                                    </dd>
                                    <dt class="mt-3 font-medium text-gray-900">Reference code:</dt>
                                    <dd class="text-gray-500 space-y-3">
                                      <p>
                                        {{ order.referencecode }}
                                      </p>
                                    </dd>
                                  </div>
                                </dl>
                              </div>


                              <div class="mt-6 lg:mt-0 lg:col-span-5 lg:mt-5">
                                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                  <div>
                                    <dt class="font-medium text-gray-900">Pick-up address:</dt>
                                    <dd class="text-gray-500">
                                      <span class="block">{{ order.pickupaddress }}</span>
                                    </dd>
                                    <dt class="font-medium text-gray-900 mt-3">Drop-off address:</dt>
                                    <dd class="text-gray-500">
                                      <span class="block">{{ order.dropoffaddress}}</span>
                                    </dd>
                                    <dt class="font-medium text-gray-900 mt-3">Notes:</dt>
                                    <dd class="text-gray-500">
                                      <span class="block">{{ order.notes}}</span>
                                    </dd>
                                  </div>
                                  <div>
                                    <dt class="font-medium text-gray-900">Pick-up date & time:</dt>
                                    <dd class="text-gray-500 space-y-3">
                                      <p>
                                        {{ moment(order.date).format("dddd MMMM DD, YYYY [at] HH:mm a") }}
                                      </p>
                                    </dd>
                                    <dt class="mt-3 font-medium text-gray-900">Distance:</dt>
                                    <dd class="text-gray-500 space-y-3">
                                      <p>
                                        {{ order.distance }}
                                      </p>
                                    </dd>
                                    <dt class="mt-3 font-medium text-gray-900">Duration:</dt>
                                    <dd class="text-gray-500 space-y-3">
                                      <p>
                                        {{ order.duration }}
                                      </p>
                                    </dd>
                                  </div>

                                </dl>
                              </div>
                            </div>
                          </div>

                          <div class="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                            <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                              <div>
                                <dt class="font-medium text-gray-900">User account:</dt>
                                <dd class="mt-3 text-gray-500">
                                  <span class="block">{{ order.user.firstname }} {{ order.user.lastname }}</span>
                                  <span class="block">{{ order.user.streetaddress }}, {{ order.user.zip }}</span>
                                  <span class="block">{{ order.user.city }} - {{ order.user.region }} </span>
                                  <span class="block">{{ order.user.country }}</span>
                                  <span class="block">{{ order.user.phone }}</span>
                                  <span class="block">{{ order.user.email}}</span>
                                </dd>
                              </div>
                              <div>
                                <dt class="font-medium text-gray-900">Payment information:</dt>
                                <div class="mt-3">
                                  <dd class="-ml-4 -mt-4 flex flex-wrap">

                                    <div class="ml-4 mt-4">
                                      <p class="text-gray-500">
                                        <CreditCardIcon class="h-6 w-6"></CreditCardIcon>
                                      </p>
                                      <p class="text-gray-500">
                                        Brand:  <span class="uppercase">{{ order.cardBrand }}</span>
                                      </p>
                                      <p class="text-gray-500">
                                        Ending with: {{ order.lastFour }}
                                      </p>
                                      <p class="text-gray-500">
                                        Expire: {{order.expire}}
                                      </p>
                                    </div>
                                  </dd>
                                </div>
                              </div>
                            </dl>

                            <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                              <div class="pt-4 flex items-center justify-between">
                                <dt class="font-medium text-gray-900">ID trans:</dt>
                                <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
                              </div>
                              <div class="pt-4 flex items-center justify-between">
                                <dt class="font-medium text-gray-900">Total de la commande</dt>
                                <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
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
          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/vue/solid'
import { CreditCardIcon, ChevronDownIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import moment from 'moment'


export default {
  data() {
    return {
      orders : [],
      facet: [],
      searchQuery: null,
    }
  },

  /*eslint-disable */
  beforeMount(){

    this.axios.get(process.env.VUE_APP_URL_API + 'api/orders/')
        .then(response =>
            this.orders = response.data
        )
  },

  computed: {

    filterOrders(){
      return this.orders.filter(order => order.id == this.searchQuery)
    },

    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    }
  },

  methods: {
    fetchOrders(){
      this.axios.get(process.env.VUE_APP_URL_API + 'api/orders/')
          .then(response =>
              this.orders = response.data
          )
    },



    deliver(index) {
      let order = this.orders[index]
      /*eslint-disable */
      this.axios.patch(process.env.VUE_APP_URL_API + `api/orders/${order.id}/deliver`).then(response => {
        this.orders[index].is_delivered = 1
        this.$forceUpdate()
      })
    }
  },

  mounted(){
    this.fetchOrders();
  },

  setup() {
    return {
      moment,
    }
  },

  components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
    CreditCardIcon,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
}
</script>