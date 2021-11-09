<template>

  <div class="flex flex-col">
    <h1 class="mt-10 p-2 font-bold">Order Active</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          <main class="mx-auto">


              <div v-for="order in orders" :key="order.id" class="py-3 border-b-4 border-indigo-600 " >
                <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
                  <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div class="sm:flex lg:col-span-7 border-b ">
                      <div class="flex-shrink-0 w-full rounded-lg overflow-hidden sm:aspect-none sm:w-40">
                        <img :src="order.product.image" class="w-full  object-center object-cover sm:w-full" />
                      </div>

                      <div class="mt-6 sm:mt-0 sm:ml-6">
                        <h1 class="text-base font-xlarge text-gray-900">
                          Order Reference n° {{ order.id }}
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
                          <dt class="font-medium text-gray-900 mt-3">Additional passenger:</dt>
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
                      <dt class="font-medium text-gray-900">ID transaction:</dt>
                      <dd class="font-medium text-indigo-600">{{ order.transactionID }}</dd>
                    </div>
                    <div class="pt-4 flex items-center justify-between">
                      <dt class="font-medium text-gray-900">Order total</dt>
                      <dd class="font-medium text-indigo-600">€ {{order.amount/100}}</dd>
                    </div>
                  </dl>
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
import { CreditCardIcon } from '@heroicons/vue/outline'
import moment from 'moment'


export default {
  data() {
    return {
      orders : []
    }
  },
  beforeMount(){
    this.axios.get(process.env.VUE_APP_URL_API + 'api/orders/').then(response => this.orders = response.data)
  },

  methods: {
    deliver(index) {
      let order = this.orders[index]
      /*eslint-disable */
      this.axios.patch(process.env.VUE_APP_URL_API + `api/orders/${order.id}/deliver`).then(response => {
        this.orders[index].is_delivered = 1
        this.$forceUpdate()
      })
    }
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
    CreditCardIcon
  },
}
</script>