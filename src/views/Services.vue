<template>
  <div class="bg-gray-800">
    <div class="pt-6 pb-16 sm:pb-24">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span class="md:block">Belga mobility</span>
                  {{ ' ' }}
                  <span class="text-indigo-400 md:block">Your personal driver</span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  SERVICE DE LOCATION DE VOITURE AVEC UN CHAUFFEUR PRIVÉ EN BELGIQUE ET EN EUROPE - 24H/24
                </p>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 px-4 sm:px-6">

              <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 class="mt-6 text-left text-3xl font-extrabold text-white">
                    Réservez votre trajet
                  </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div class="bg-white py-2 px-2 shadow sm:rounded-lg sm:px-2">
                    <div class="flex flex-wrap">
                      <div class="w-full">
                        <ul class="flex mb-0 list-none flex-wrap pt-2 pb-2 flex-row">
                          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
                              Distance
                            </a>
                          </li>
                          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
                              Hourly
                            </a>
                          </li>
                        </ul>
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
                          <div class="px-2 py-2 flex-auto">
                            <div class="tab-content tab-space">
                              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                                <form @submit.prevent="getDistanceByCar"  class="space-y-6">

                                  <div class="mt-3" v-if="error" >
                                    <div v-if="alertsOpen" class="rounded-md bg-red-50 p-4 p-4">
                                      <div class="flex">
                                        <div class="flex-shrink-0">
                                          <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                                        </div>
                                        <div class="ml-3">
                                          <p class="text-sm font-medium text-red-700">
                                            {{ error }}
                                          </p>
                                        </div>
                                        <div class="ml-auto pl-3">
                                          <div class="-mx-1.5 -my-1.5">
                                            <button v-on:click="closeAlert()" type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                                              <span class="sr-only">Dismiss</span>
                                              <XIcon class="h-5 w-5" aria-hidden="true" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <!--                                  https://vcalendar.io/-->

                                  <div>
                                    <label for="time" class="block text-sm font-medium text-gray-700">
                                      Date & Time
                                    </label>
                                    <div class="mt-1">
                                      <v-date-picker v-model="date" mode="dateTime" is24hr>
                                        <template v-slot="{ inputValue, inputEvents }">
                                          <input
                                              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              :masks="masks"
                                              :value="inputValue"
                                              v-on="inputEvents"
                                          />
                                        </template>
                                      </v-date-picker>
                                    </div>
                                  </div>


                                  <div class="relative">
                                    <label for="pickup" class="block text-sm font-medium text-gray-700 mb-1">
                                      Pick up
                                    </label>
                                    <div class="absolute top-4 left-3 "> </div> <input v-model="address" id="autocomplete3" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search anything...">
                                    <div class="absolute top-7 right-2 text-center">
                                      <button @click="locatorButtonPressed" class="h-4 w-4 text-gray-600  hover:text-black"><LocationMarkerIcon class="mt-1 mr-2 w-5 h-5 text-white-500" aria-hidden="true" /> </button>
                                    </div>
                                  </div>

                                  <div>
                                    <label for="dropoff" class="block text-sm font-medium text-gray-700">
                                      Drop off
                                    </label>
                                    <div class="mt-1">
                                      <input id="autocomplete2" ref="autocomplete" v-model="destination" autocomplete="destination" required="" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                  </div>

                                  <div>
                                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Réserver
                                    </button>
                                  </div>
                                </form>
                              </div>


                              <!--                              hourly-->

                              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                <form @submit.prevent="getHourly"  class="space-y-6">
                                  <!-- START error on geolocalization-->
                                  <div class="rounded-md bg-red-50 p-4" v-show="error">
                                    <div class="flex">
                                      <div class="flex-shrink-0">
                                        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                                      </div>
                                      <div class="ml-3">
                                        <h3 class="text-sm font-medium text-red-800">
                                          {{error}}
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- END error on geolocalization-->

                                  <!--                                  https://vcalendar.io/-->

                                  <div>
                                    <label for="time" class="block text-sm font-medium text-gray-700">
                                      Date & Time
                                    </label>
                                    <div class="mt-1">
                                      <v-date-picker v-model="date" mode="dateTime" is24hr>
                                        <template v-slot="{ inputValue, inputEvents }">
                                          <input
                                              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              :value="inputValue"
                                              v-on="inputEvents"
                                          />
                                        </template>
                                      </v-date-picker>
                                    </div>
                                  </div>

                                  <div class="relative">
                                    <label for="pickup" class="block text-sm font-medium text-gray-700 mb-1">
                                      Pick up
                                    </label>
                                    <div class="absolute top-4 left-3 "> </div> <input v-model="address" id="autocomplete1" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search anything...">
                                    <div class="absolute top-7 right-2 text-center">
                                      <LocationMarkerIcon class="mt-1 mr-2 w-5 h-5 text-white-500" aria-hidden="true" />
                                    </div>
                                  </div>

                                  <div>
                                    <label for="hours" class="block text-sm font-medium text-gray-700">
                                      Durée
                                    </label>
                                    <div class="mt-1">
                                      <select id="hours" v-model="hours" name="hours" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">{{option.text }}</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div>
                                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Réserver
                                      <!--  Réserver (hour)-->
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>


  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Nos services</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ person.name }}</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">{{ person.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <Newsletter></Newsletter>
  <Contact></Contact>

</template>

<script>
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import {  LocationMarkerIcon  } from '@heroicons/vue/outline'
import { XCircleIcon, XIcon } from '@heroicons/vue/solid'
import { Calendar, DatePicker } from 'v-calendar';
import moment from 'moment'

const options =[
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
  { text: '5', value: 5 },
  { text: '6', value: 6},
  { text: '7', value: 7},
  { text: '8', value: 8 },
  { text: '9', value: 9 },
  { text: '10', value: 10 },
  { text: '11', value: 11 },
  { text: '12', value: 12 },
  { text: '13', value: 13},
  { text: '14', value: 14 },
  { text: '15', value: 15 },
  { text: '16', value: 16 },
  { text: '17', value: 17},
  { text: '18', value: 18 },
  { text: '19', value: 19 },
  { text: '20', value: 20 },
  { text: '21', value: 21 },
  { text: '22', value: 22 },
  { text: '23', value: 23 },
  { text: '24', value: 24 },
  { text: '36', value: 36 },
  { text: '48', value: 48 },
  { text: '60', value: 60 },
  { text: '72', value: 72 },
  { text: '84', value: 84 },
  { text: '96', value: 96 },
]

const people = [
  {
    name: 'Longue distance',
    imageUrl:
        'img/e_inside.jpg',
    bio:
        'La voiture devient la prolongation de votre bureau. Chargeur, Wifi, eau et autres attentions personnelles sont prévues à cet effet. Le chauffeur assure votre intimité.',
  },
  {
    name: 'Service horaire',
    imageUrl:
        'img/clock.jpg',
    bio:
        'Votre chauffeur privé prend connaissance de votre planning. Il vous indiquera les heures de départs et vous donnera à chaque arrêt un point de rendez-vous clair visuellement.',
  },
  {
    name: 'Transfert aéroport',
    imageUrl:
        'img/station.jpg',
    bio:
        'Gagnez 40 minutes en évitant les files. Notre chauffeur privé assure un suivi permanent des vols. Il vous attendra à la sortie de votre vol, avec une pancarte personnalisée et d’autres attentions personnelles. Vol en retard ? Votre chauffeur vous attend. Transfert disponible au départ et à destination de Brussels Airport Zaventem, Brussels South Charleroi, Liège Aéroport ou Ostende Aéroport.',
  },
  {
    name: 'Transfert gare',
    imageUrl:
        'img/station.jpg',
    bio:
        'Gagnez 40 minutes en évitant les files. Notre chauffeur privé assure un suivi permanent des trains. Il vous attendra à la sortie de votre voyage, avec une pancarte personnalisée et d’autres attentions personnelles. Train en retard ? Votre chauffeur vous attend.',
  },
  {
    name: 'Délégation diplomatique',
    imageUrl:
        'img/diplomatic.jpg',
    bio:
        'Votre chauffeur privé adapte la mise à disposition aux enjeux et aux imprévus de la mission. Au besoin, Belga Mobility débloque des solutions de transport dans l’heure.',
  },
  {
    name: 'Mariage',
    imageUrl:
        'img/wedding.jpg',
    bio:
        'Un mariage c’est un jour inoubliable mais aussi stressant. Le chauffeur vous assure une bulle d’air de décompression dans sa voiture ainsi qu’une ambiance de fête selon vos goûts!',
  },
  {
    name: 'Event',
    imageUrl:
        'img/event.jpg',
    bio:
        'Dans un esprit de travail d’équipe, Belga Mobility co-organise les transports et le planning avec vous. Malgré les imprévus, les chauffeurs s’assurent que tous les invités ou collaborateurs soient conduits au lieu de rendez-vous.',
  },
  {
    name: 'Tour',
    imageUrl:
        'img/tour.jpg',
    bio:
        'Découvrez le patrimoine belge grâce à nos voitures de luxe avec chauffeur privé.',
  },



// More people...
]

export default {

  name: "pink-tabs",
  data() {
    return {
      masks:{
        input:'YYYY-MM-DD h:mm A',
      },
      openTab: 1,
      address:"",
      destination:"",
      error:"",
      alertsOpen: true,
      hours:"",
      distance:"",
      date: new Date(),
      key :process.env.VUE_APP_GOOGLE
    }
  },

  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },

    locatorButtonPressed(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position => {
              this.getAddressFrom(position.coords.latitude,position.coords.longitude)
            },
            /*eslint-disable */
            error =>{
              this.error = "Locator is unable to find your address. Please type manually"
              // console.log(error.message)
            }
        );
      } else {
        this.error = "Your browser does not support Geolocation API"
        // console.log("Your browser does not support Geolocation API")
        /*eslint-enable */
      }
    },
    getAddressFrom(lat,long){
      this.axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + "," + long + "&key=" + this.key)
          .then(response=>{
            if(response.data.error_message){
              this.error = response.data.error_message;
            } else {
              this.address = response.data.results[0].formatted_address
              // console.log(response.data.results[0].formatted_address);
            }
          })
          .catch(error=>{
            this.error = error.message
            console.log(error.message)
          })
    },


    getDistanceByCar(e){
      e.preventDefault()
      /*eslint-disable */

      let destinationA = this.address
      let destinationB = this.destination
      let date = moment(this.date).format("dddd MMMM DD, YYYY [at] HH:mm a")
      let self = this;

      let service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
          {
            origins: [destinationA],
            destinations: [destinationB],
            avoidHighways: false,
            travelMode: 'DRIVING',
          }, callback);


      function callback(response, status) {

        if (response.destinationAddresses[0] != '') {


          self.$store.commit('setReservation', [
            {id: 1, name: "Pick up address", "value": response.originAddresses[0]},
            {id: 2, name: "Drop off address", "value": response.destinationAddresses[0]},
            {id: 3, name: "Temps de trajet", "value": response.rows[0].elements[0].duration['text']},
            {id: 4, name: "Distance km", "value": response.rows[0].elements[0].distance['text']},
            {id: 5, name: "Date de départ", "value": date}
          ])

          self.$store.commit('setOrderReservation',
              {pickupaddress: response.originAddresses[0], dropoffaddress: response.destinationAddresses[0], duration: response.rows[0].elements[0].duration['text'], distance: response.rows[0].elements[0].distance['text'], date: self.date }
          )

          self.$store.commit('setReservationValue', response.rows[0].elements[0].distance['value'])

          self.$router.push({name: 'Chooseyourcategory'})
        } else self.error = 'Provide a valide street number'

      }
      /*eslint-enable */
    },

    getHourly(e){
      e.preventDefault()
      this.$store.commit('setReservation', [
        {id:1, name:"Pick up address", "value":  this.address},
        {id:2,name:"Drop off address", "value":  '-'},
        {id:3,name:"Temps de trajet in heures", "value": this.hours},
        {id:4,name:"Distance km", "value":'-'},
        {id:5,name:"Date de départ" , "value": this.date}
      ])

      this.$router.push({name: 'Chooseyourcategory'})

    },

    closeAlert: function(){
      this.alertsOpen = false;
    }

  },
  /*eslint-disable */

  components: {
    Contact,
    Newsletter,
    LocationMarkerIcon,
    XCircleIcon,
    DatePicker,
    Calendar,
    XIcon,
  },

  setup() {
    return {
      people,
      options
    }
  },

  mounted() {

    new google.maps.places.Autocomplete(
        document.getElementById('autocomplete1'),
    ),
        new google.maps.places.Autocomplete(
            this.$refs["autocomplete"],
        ),
        new google.maps.places.Autocomplete(
            document.getElementById('autocomplete3'),
        )
  },
}
</script>

<style>
[type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>