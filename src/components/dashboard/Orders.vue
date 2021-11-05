<template>
  <div class="flex flex-col">
    <h1 class="mt-10 p-2 font-bold">Order Active</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">


          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="(order,index) in orders" v-bind:key="index">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-indigo-600 truncate">
                        Order ref. n°{{ order.id }}
                      </p>
                      <div class="ml-2 flex-shrink-0 flex">
                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          € {{ order.amount }}
                        </p>
                      </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="sm:flex">
                        <p class="flex items-center text-sm text-gray-500">
                          <UsersIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          User
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Pick up
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Drop off
                        </p>
                      </div>
                      <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                          Created at
                          <time :datetime="order.created_at">{{ order.created_at }}</time>
                        </p>
                      </div>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { MailIcon, DotsVerticalIcon, SearchIcon, ShoppingBagIcon, CheckCircleIcon } from '@heroicons/vue/outline'
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
    MailIcon, DotsVerticalIcon, SearchIcon, ShoppingBagIcon, CheckCircleIcon, CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
  },
}
</script>