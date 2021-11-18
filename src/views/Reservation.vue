<template>

<div class="max-w-7xl mx-auto">
  <header>
    <div class="text-center my-10">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">Toutes vos </span>
        {{ ' ' }}
        <span class="block text-indigo-600 xl:inline">réservations.</span>
      </h1>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Gardez une trace de toutes vos commandes et de leur statut.
      </p>
    </div>
  </header>

  <main>




    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
        <div class="mx-auto divide-y-2 divide-gray-200">
          <dl class="mt-6 space-y-6 divide-y divide-gray-200">
            <Disclosure as="div" v-for="(order, index) in sortedOrders" :key="index" class="pt-6" v-slot="{ open }">
              <dt class="text-lg">
                <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">

                  <div class="text-sm text-gray-900">
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      Order Reference n° {{ order.id }}<br>
                      <span class="text-gray-700">Départ:</span><br>
                      {{ moment(order.date).format("llll") }}
                    </p>
                  </div>
                  <div class="justify-end flex">
                    <div class="ml-2 inline ...">
                      <button type="button" @click="faqOrder = order" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true"></QuestionMarkCircleIcon>
                      </button>
                    </div>
                    <span class="ml-6 h-7 flex items-center">
                      <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                    </span>
                  </div>

                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2" style="max-height: 200vh">



                <div class="py-3 border-b-4 border-indigo-600 " >
                  <div class="bg-white py-3 border-t border-b border-gray-200 shadow-sm sm:border">
                    <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                      <div class="sm:flex lg:col-span-7">
                        <div class="flex-shrink-0 w-full rounded-lg overflow-hidden sm:aspect-none sm:w-40">
                          <img :src="order.product.image" class="w-full  object-center object-cover sm:w-full" alt="product image" />
                        </div>
                        <div class="mt-6 sm:mt-0 sm:ml-6">
                          <h1 class="text-base font-xlarge text-gray-900">
                            Order Reference n° {{ order.id }}
                          </h1>
                          <p class="text-gray-500 font-medium ">€ {{order.amount /100}}</p>
                          <p class="mb-2 text-gray-500 font-medium border-b border-3 border-gray-900">{{order.product.name}}</p>
                        </div>
                      </div>


                      <div class="sm:flex lg:col-span-7 mt-5">
                        <dl class="grid grid-cols-2 gap-x-6 text-sm">
                          <div>
                            <dt class="font-medium text-gray-900">Numéro de vol:</dt>
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
                            <dt class="font-medium text-gray-900">Panneau d'accueil:</dt>
                            <dd class="text-gray-500 space-y-3">
                              <p>
                                {{ order.pickupsign}}
                              </p>
                            </dd>
                            <dt class="mt-3 font-medium text-gray-900">Code de référence:</dt>
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
                            <dt class="font-medium text-gray-900">Adresse de retrait:</dt>
                            <dd class="text-gray-500">
                              <span class="block">{{ order.pickupaddress }}</span>
                            </dd>
                            <dt class="font-medium text-gray-900 mt-3">Adresse de dépôt :</dt>
                            <dd class="text-gray-500">
                              <span class="block">{{ order.dropoffaddress}}</span>
                            </dd>
                            <dt class="font-medium text-gray-900 mt-3">Notes:</dt>
                            <dd class="text-gray-500">
                              <span class="block">{{ order.notes}}</span>
                            </dd>
                          </div>
                          <div>
                            <dt class="font-medium text-gray-900">Date et heure de retrait:</dt>
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
                            <dt class="mt-3 font-medium text-gray-900">Durée:</dt>
                            <dd class="text-gray-500 space-y-3">
                              <p>
                                {{ order.duration }}
                              </p>
                            </dd>
                          </div>
                          <modal @close="endEditing" :order="faqOrder" v-show="faqOrder != null"></modal>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>


              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 mt-10">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
        </div>
        <div class="mt-20">
          <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="font-semibold text-white">
                {{ faq.question }}
              </dt>
              <dd class="mt-3 text-gray-400">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { QuestionMarkCircleIcon, XIcon, ChevronDownIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import modal from "../components/user/FaqModal";
import moment from 'moment'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

]

export default {
  data() {
    return {
      user : null,
      faqOrder: null,
      showModal: false,
      orders : [],
    }
  },
  beforeMount() {

    this.user = JSON.parse(localStorage.getItem('bigStore.user'))

    this.axios.defaults.headers.common['Content-Type'] = 'application/json'
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')

    this.axios.get(process.env.VUE_APP_URL_API + `api/users/${this.user.id}/orders`)
        .then(response => this.orders = response.data)

  },

  /*eslint-disable */

  computed: {
    sortedOrders: function() {
      this.orders.sort( ( a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      return this.orders;
    }
  },

  setup() {
    return {
      faqs,
      moment,
    }
  },

  methods:{

    /*eslint-disable */
    endEditing(order) {
      this.faqOrder = null
    },

  },


  components:{
    QuestionMarkCircleIcon,
    XIcon,
    modal,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon

  }

}
</script>