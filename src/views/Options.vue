<template>
  <nav aria-label="Progress">
    <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex-1 md:flex">
        <p v-if="step.status === 'complete'" class="group flex items-center w-full">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </p>
        <p v-else-if="step.status === 'current'" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
            <span class="text-indigo-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
        </p>
        <p v-else class="group flex items-center">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
              <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
          </span>
        </p>
        <template v-if="(stepIdx !== steps.length - 1)">
          <!-- Arrow separator for lg screens and up -->
          <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </li>
      <li>
        <div class="mx-auto p-5" aria-hidden="true">
          <button @click="$router.go(-1)" class="inline-flex items-center py-1.5 px-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <ChevronDoubleLeftIcon class="h-5 w-5 mr-2" aria-hidden="true" />
            Retour
          </button>
        </div>
      </li>
    </ol>
  </nav>


  <div class="bg-gray-200">
    <dl class="grid grid-cols-1 rounded-lg overflow-hidden shadow divide-y divide-gray-600 md:grid-cols-6 md:divide-y-0 md:divide-x">
      <div v-for="item in reservation" :key="item.id" class="px-4 py-2 sm:p-2">
        <dt class="text-base font-normal text-gray-900">
          {{ item.name }}
        </dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div class="flex items-baseline text-sm font-semibold text-indigo-600">
            {{ item.value }}
          </div>
        </dd>
      </div>
    </dl>
  </div>


<!--  Options form-->


  <form @submit.prevent="handleSubmit">
      <div class="space-y-6 max-w-5xl mx-auto mt-10">
        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Détails de la prise en charge à l'aéroport</h3>
              <p class="mt-1 text-sm text-gray-500">
                Entrez votre numéro de vol afin que notre chauffeur privé puisse suivre l'état de votre vol et venir vous chercher à votre arrivée, même si votre vol est retardé.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form class="space-y-6" action="#" method="POST">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="flight-details" class="block text-sm font-medium text-gray-700">Flight details</label>
                      <input v-model="flight" type="text" name="flight-details" id="flight-details" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Ex: FR4242" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Information additionnelle</h3>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="space-y-6">


                <div class="col-span-6 sm:col-span-3">
                  <label for="pickup-sign" class="block text-sm font-medium text-gray-700">Pickup sign</label>
                  <input v-model="pickupsign" type="text" name="pickup-sign" id="pickup-sign" autocomplete="pickup-sign" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="reference-code" class="block text-sm font-medium text-gray-700">Votre code de référence</label>
                  <input v-model="referencecode" type="text" name="reference-code" id="reference-code" autocomplete="reference-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div>
                  <label for="notes" class="block text-sm font-medium text-gray-700">
                    Notes pour le chauffeur
                  </label>
                  <div class="mt-1">
                    <textarea v-model="notes" id="notes" name="notes" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Any special request (child car seat..) ?" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Aidez-nous à vous fournir un meilleur service et ajoutez des demandes spéciales. Veuillez ne pas inclure d'informations confidentielles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Booking options</h3>
            </div>
            <div class="md:mt-0 md:col-span-2">
              <div class="space-y-6">
                <fieldset>
                  <div class="space-y-4 mt-4 md:mt-0 lg:mt-0">
                    <div class="flex items-start">
                      <div class="h-5 flex items-center">
                        <input v-model="checked" id="comments" name="comments" type="checkbox" checked="" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700">Voulez-vous ajouter un autre passager?</label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>


        <div v-if="checked" class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Informations personnelles</h3>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div>
                <div class="grid grid-cols-6 gap-6">

                  <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Prénom</label>
                    <input v-model="firstname" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Nom de famille</label>
                    <input v-model="lastname" type="text" name="last-name" id="last-name" autocomplete="last-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                    <input v-model="email" type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                    <input v-model="phone" type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="flex justify-end">
          <button type="submit" class="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Suivant
          </button>
        </div>
      </div>
  </form>

</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'
import { ChevronDoubleLeftIcon } from '@heroicons/vue/outline'

const steps = [
  { id: '01', name: 'Choose your category', status: 'complete' },
  { id: '02', name: 'Options', status: 'current' },
  { id: '03', name: 'Checkout', status: 'upcoming' },
]



export default {


  data(){
    return {
      checked: false,
      flight:'',
      pickupsign:'',
      referencecode:'',
      notes:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      error:'',
      isLoggedIn : null,
      product : [],
      pid: this.$route.params.id
    }
  },


  beforeMount() {
    this.axios.get(process.env.VUE_APP_URL_API + 'api/products/'+ this.pid).then(response => this.product = response.data)

    if (localStorage.getItem('bigStore.jwt') != null) {
      this.user = JSON.parse(localStorage.getItem('bigStore.user'))
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
    }
  },

  methods:{
    handleSubmit(e){
      e.preventDefault()

      this.$store.commit('setOption',
        {
          flight: this.flight,
          pickupsign: this.pickupsign,
          referencecode: this.referencecode,
          notes: this.notes,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          amount: this.detailReservation,
          productID: this.pid
        }
      )

      this.$router.push({path: '/Checkout/'+this.pid})
    }
  },


  computed: {

    reservation:{
      get(){
        return this.$store.state.reservation
      },
    },
    detailReservation:{
      get(){
        return this.$store.state.detailReservation
      },
    }
  },

  components: {
    CheckIcon,
    ChevronDoubleLeftIcon
  },
  setup() {
    return {
      steps,
    }
  },

}
</script>