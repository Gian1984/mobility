<template>
  <nav aria-label="Progress">
    <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex-1 md:flex">
        <p v-if="step.status === 'complete'"  class="group flex items-center w-full">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </p>
        <p v-else-if="step.status === 'current'"  class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
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


  <!--  choosen option section-->

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

<!--  Car options-->

  <div class="bg-white">
    <div class="max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
      <div class="max-w-xl">
        <h1 id="your-orders-heading" class="text-3xl font-extrabold tracking-tight text-gray-900">Votre choix</h1>
        <p class="mt-2 text-sm text-gray-500">Choisissez le véhicule qui correspond le mieux à vos besoins.</p>
      </div>
      <div class="mt-12 space-y-16 sm:mt-16">
          <div class="mt-6 -mb-6 flow-root mb-14 space-y-16">
            <div v-for="(product, index) in total" :key="index">
                <div class="pt-1.5 min-w-0 flex-1 sm:pt-0 border-b border-1 border-gray-200">
                  <h3 class="text-xl font-medium text-gray-900">
                    <a>{{ product.name }}</a>
                  </h3>
                  <p class="text-sm text-gray-500 truncate">
                    <span>{{ product.description }}</span>
                  </p>
                  <p class="text-sm text-gray-500 truncate flex">
                    <span class="flex">
                      <UserGroupIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> max. {{ product.passengers }} <BriefcaseIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 ml-2" aria-hidden="true" /> max. {{product.luggage}}
                    </span>
                  </p>
                </div>
              <div class="py-6 sm:flex">
                <div class="mb-8 md:mb-0 lg:mb-0">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li  class="py-1">
                      <p class="text-sm text-gray-500 truncate">
                        <i class="fas fa-tint p-1"></i>
                        <span>Bouteille d'eau offerte</span>
                      </p>
                    </li>
                    <li  class="py-1">
                      <p class="text-sm text-gray-500 truncate">
                        <i class="fas fa-award p-1"></i>
                        <span>Service d'accueil</span>
                      </p>
                    </li>
                    <li  class="py-1">
                      <p class="text-sm text-gray-500 truncate">
                        <i class="far fa-clock p-1"></i>
                        <span>60 mins d'attente gratuite à l'aéroport</span>
                      </p>
                    </li>
                    <li  class="py-1">
                      <p class="text-sm text-gray-500 truncate">
                        <i class="far fa-window-close p-1"></i>
                        <span>Annulation gratuite jusqu'à une<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heure avant la prise en charge</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="flex space-x-4  sm:flex-1 sm:space-x-6 lg:space-x-8">
                  <img :src="product.image" alt="Choise your car" class="flex-none w-100 rounded-md object-center object-cover mx-auto" />
                </div>
                <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-1/4">
                  <p class="mt-1 font-medium text-gray-900">€ {{product.amount}}</p>
                  <p class="text-sm text-gray-500 truncate">
                    <span>Tous les prix comprennent<br> TVA, frais et pourboire.</span>
                    {{ ' ' }}
                  </p>
                  <button @click="service(product.id, product.amount)" type="button" class="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                    Choisir
                    <ChevronDoubleRightIcon class="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'
import {  ChevronDoubleLeftIcon, ChevronDoubleRightIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/vue/outline'

const steps = [
  { id: '01', name: 'Choose your category', status: 'current' },
  { id: '02', name: 'Options', status: 'upcoming' },
  { id: '03', name: 'Checkout', status: 'upcoming' },
]

export default {



  data(){
    return {
      result:'',
      priceskm:'',
      total:'',
    }
  },

  methods:{
    service(id, amount ){
      this.$store.commit('detailReservation',( amount ))
      this.$router.push({path: '/Options/'+ id})
    },
  },

  mounted(){
    this.axios.get(process.env.VUE_APP_URL_API + "api/products/")
        .then(response => {
          let productskmprices = response.data
          /*eslint-disable */
          this.total = productskmprices.map(element=>{

            let prixKm = element.pricekm;
            let km = this.reservationValue / 1000;
            km = (Math.round(km * 100) / 100).toFixed(0);
            let forfait1 = 50;
            let forfait2 = 65;
            let min = 8;
            let intervalle =16;
            let max = 50;
            let diff = max-intervalle;
            let kmRestant = km-intervalle;
            let total = 0;
            let prixKmMax = null;
            let restePrix = null;
            let dividende = null;
            let somme = 0;

            // Condition 1
            if (km <= min) {
              return {id:element.id, amount:(Math.round(forfait1 * 100) / 100).toFixed(2), name:element.name, description: element.description, image:element.image, passengers:element.passengers, luggage:element.luggage};

            } // Condition 2
              else if(km > min && km<= intervalle) {
              return {id:element.id, amount:(Math.round(forfait2*100)/100).toFixed(2), name:element.name, description: element.description, image:element.image, passengers:element.passengers, luggage:element.luggage};
            } // Condition 3
              else if(km > intervalle && km < max) {
              prixKmMax=max*prixKm;
              restePrix = prixKmMax-forfait2;
              dividende = restePrix/diff;
              for(let i = 1;i<= kmRestant; i++) {
                somme = dividende + somme;
                console.log((i+intervalle) + ' km: ' + (somme+forfait2));
              }
              return  {id:element.id, amount:(Math.round((somme+forfait2)*100)/100).toFixed(2), name:element.name, description: element.description, image:element.image, passengers:element.passengers, luggage:element.luggage};

            } // Condition 4
              else if(km>=max){
                return  {id:element.id, amount:(Math.round((km*prixKm)*100)/100).toFixed(2), name:element.name, description: element.description, image:element.image, passengers:element.passengers, luggage:element.luggage};
            }

            return null
          })

        })
  },


  computed: {

    reservation:{
      get(){
        return this.$store.state.reservation
      },
    },
    reservationValue:{
      get(){
        return this.$store.state.reservationValue
      }
    }
  },


  components: {
    CheckIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    BriefcaseIcon,
    UserGroupIcon
  },
  setup() {
    return {
      steps,
    }
  },
}
</script>