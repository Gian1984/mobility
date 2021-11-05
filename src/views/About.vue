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
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">



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


<!--  Who we are -->

  <div class="relative bg-white py-16 sm:py-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full bg-cyan-600 rounded-r-3xl lg:right-72" />
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern  id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-teal-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <!-- Testimonial card-->
          <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100" alt="" />
            <div class="absolute inset-0 " />
            <div class="absolute inset-0" />
            <div class="relative px-8">
              <div>
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            QUI SOMMES-NOUS ?
          </h2>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">
              Face à un monde en perpétuel changement, votre vie est de plus en plus active. Vos besoins en déplacements augmentent. Vous cherchez une solution de transports à la fois confortable, pratique, dans un environnement agréable ?
              Le service de location de voitures avec un chauffeur privé est la meilleure solution.
              Fort d’une expérience de 7 ans, Belga Mobility a bien compris qu’un service irréprochable dépend avant tout des compétences du chauffeur. C’est pourquoi, nous nous engageons à vous proposer un service de location de voitures avec des chauffeurs experts et flexibles, discrets et chaleureux. Leur objectif : s’adapter à vos besoins professionnels ou privés !
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>





  <div class="bg-white">
    <main>

      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl text-center">
        Notre vision
      </h1>

      <!-- Logo cloud section -->
      <div class="mt-32">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                La satisfacion du client
              </h2>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                Nous sommes conscients que chaque trajet est bien plus qu’un déplacement. C’est pourquoi Belga Mobility cherche à réellement comprendre les besoins de ses clients.
              </p>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            </div>
          </div>
        </div>
      </div>



      <!-- Testimonial/stats section -->
      <div class="relative mt-2">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div class="relative sm:py-16 lg:py-0">

          </div>

          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <!-- Content area -->
            <div>
              <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Une relation long terme
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Grâce à un service irréprochable, de nombreux clients font appel à nos services régulièrement. Nos chauffeurs apprennent ainsi à vous connaître et facilitent l’ organisation de vos déplacements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud section -->
      <div class="mt-2">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Un savoir faire Belge
              </h2>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                Société de location de voitures avec chauffeur privé située en Belgique, Belga Mobility est un réel expert du territoire belge.
              </p>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            </div>
          </div>
        </div>
      </div>



      <!-- Testimonial/stats section -->
      <div class="relative mt-2">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div class="relative sm:py-16 lg:py-0">


          </div>

          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <!-- Content area -->
            <div>
              <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Evolution et relation humaine
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Belga Mobility cherche à constamment améliorer ses services grâce aux nouvelles technologies sans pour autant perdre le lien humain avec ses clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Hero section -->
      <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img class="h-11 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Workflow" />
            </div>
            <div class="mt-20">
              <div class="mt-6 sm:max-w-xl">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Un fondateur passionné et humain
                </h1>
                <p class="mt-6 text-xl text-gray-500">
                  Abdel a allié ses deux passions pour créer Belga Mobility : les voitures de luxe et son empathie pour les autres !
                  <br>Son écoute active de ses clients lui permet aujourd’hui de créer un service de location de voitures avec chauffeur privé, 100 % personnalisable. Entrepreneur dans l’âme, il comprend les réalités de ses clients. C’est pourquoi, il cherche continuellement à améliorer l’accessibilité de ses services.
                </p>
              </div>

              <div class="mt-6">
                <div class="inline-flex items-center divide-x divide-gray-300">
                  <div class="flex-shrink-0 flex pr-5">
                    <StarIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3"><span class="font-medium text-gray-900">Abdelilah Jiari</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div class="hidden sm:block">
              <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="img/Abdel.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>


  <Newsletter></Newsletter>
  <Contact></Contact>


</template>


<script>
import Contact from "../components/Contact"
import Newsletter from "../components/Newsletter"
import { defineComponent, h } from 'vue'
import { LocationMarkerIcon, CheckIcon,  } from '@heroicons/vue/outline'
import { StarIcon, XCircleIcon, XIcon } from '@heroicons/vue/solid'
import { Calendar, DatePicker } from 'v-calendar';

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

const logos = [
  { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
  { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
  { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
  { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
  { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
  { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
]
const footerNavigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d:
                    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ],
}

export default {

  name: "pink-tabs",
  data() {
    return {
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
            {id: 5, name: "Date de départ", "value": self.date}
          ])

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




  components: {
    Contact,
    Newsletter,
    StarIcon,
    LocationMarkerIcon,
    XCircleIcon,
    CheckIcon,
    Calendar,
    DatePicker,
    XIcon,

  },


  setup() {
    return {
      logos,
      footerNavigation,
      options
    }
  },

  mounted() {
    /*eslint-disable */
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
