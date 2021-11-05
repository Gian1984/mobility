<template>

  {{orders}}

  <div class="flex flex-col">
    <h1 class="mt-10 p-2 font-bold">Order Active</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          <main class="mx-auto">


              <div v-for="order in orders" :key="order.id" >
                <div class="bg-white border-t border-b border-gray-200 shadow-sm sm:border">
                  <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div class="sm:flex lg:col-span-7">
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


                    <div class="sm:flex lg:col-span-7">
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


                    <div class="mt-6 lg:mt-0 lg:col-span-5">
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
                        </div>
                        <div>
                          <dt class="font-medium text-gray-900">Pick-up date & time:</dt>
                          <dd class="text-gray-500 space-y-3">
                            <p>
                              {{ order.date }}
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
                      <dt class="font-medium text-gray-900">Notes:</dt>
                      <dd class="mt-3 text-gray-500">
                        <span class="block">{{ order.notes }}</span>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">Payment information</dt>
                      <div class="mt-3">
                        <dd class="-ml-4 -mt-4 flex flex-wrap">
                          <div class="ml-4 mt-4 flex-shrink-0">
                            <svg aria-hidden="true" width="36" height="24" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto">
                              <rect width="36" height="24" rx="4" fill="#224DBA" />
                              <path d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z" fill="#fff" />
                            </svg>
                            <p class="sr-only">Visa</p>
                          </div>
                          <div class="ml-4 mt-4">
                            <p class="text-gray-900">
                              Ending with 4242
                            </p>
                            <p class="text-gray-600">
                              Expires 02 / 24
                            </p>
                          </div>
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
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


export default {
  data() {
    return {
      orders : []
    }
  },
  beforeMount(){
    this.axios.get('http://localhost/api/orders/').then(response => this.orders = response.data)
  },

  methods: {
    deliver(index) {
      let order = this.orders[index]
      /*eslint-disable */
      this.axios.patch(`http://localhost/api/orders/${order.id}/deliver`).then(response => {
        this.orders[index].is_delivered = 1
        this.$forceUpdate()
      })
    }
  },


  components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
  },
}
</script>