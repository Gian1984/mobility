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
                                      <input id="autocomplete2" v-model="destination" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                  </div>


                                  <div>
                                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Réserver
                                    </button>
                                  </div>

                                </form>

                                <div class="rounded-md bg-green-50 p-4 mt-4" v-show="distance">
                                  <div class="flex">
                                    <div class="flex-shrink-0">
                                      <CheckIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div class="ml-3">
                                      <h3 class="text-sm font-medium text-green-800">
                                        {{distance['text']}}
                                      </h3>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                <form  class="space-y-6">
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

                                  <div class="relative">
                                    <label for="pickup" class="block text-sm font-medium text-gray-700 mb-1">
                                      Pick up
                                    </label>
                                    <div class="absolute top-4 left-3 "> </div> <input v-model="address" id="autocomplete1" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search anything...">
                                    <div class="absolute top-7 right-2 text-center">
                                      <button class="h-4 w-4 text-gray-600  hover:text-black"><LocationMarkerIcon class="mt-1 mr-2 w-5 h-5 text-white-500" aria-hidden="true" /> </button>
                                    </div>
                                  </div>

                                  <div>
                                    <label for="hours" class="block text-sm font-medium text-gray-700">
                                      Durée
                                    </label>
                                    <div class="mt-1">
                                      <select id="hours" name="hours" type="hours" autocomplete="current-dropoff" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="2">2 heures</option>
                                        <option value="3">3 heures</option>
                                        <option value="4">4 heures</option>
                                        <option value="5">5 heures</option>
                                        <option value="6">6 heures</option>
                                        <option value="7">7 heures</option>
                                        <option value="8">8 heures</option>
                                        <option value="9">9 heures</option>
                                        <option value="10">10 heures</option>
                                        <option value="11">11 heures</option>
                                        <option value="12">12 heures</option>
                                        <option value="13">13 heures</option>
                                        <option value="14">14 heures</option>
                                        <option value="15">15 heures</option>
                                        <option value="16">16 heures</option>
                                        <option value="17">17 heures</option>
                                        <option value="18">18 heures</option>
                                        <option value="19">19 heures</option>
                                        <option value="20">20 heures</option>
                                        <option value="21">21 heures</option>
                                        <option value="22">22 heures</option>
                                        <option value="23">23 heures</option>
                                        <option value="24" selected>24 heures</option>
                                        <option value="36">36 heures</option>
                                        <option value="48">48 heures</option>
                                        <option value="60">60 heures</option>
                                        <option value="72">72 heures</option>
                                        <option value="84">84 heures</option>
                                        <option value="96">96 heures</option>
                                    </select>
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

  <!-- Feature section with grid -->
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Service de location de voiture
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Votre chauffeur privé en Belgique et en Europe 24H/24
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial section -->
  <div class="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-8">
      <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
          <blockquote class="text-center">
            <div class="pt-10 lg:pt-0">
              <svg class="mx-auto h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p class="mt-6 text-2xl font-medium text-white">
                To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.
              </p>
            </div>
            <footer class="mt-6">
              <p class="text-base font-medium text-white">Don Alden Adams</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <!-- Blog section -->
  <div class="relative  py-16 sm:py-10 lg:py-16">
    <div class="relative">
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Services
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
      </div>
      <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.preview }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--  Guarantee section-->

  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-2xl px-6 py-16 sm:p-16">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <h2 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">LE CHAUFFEUR PRIVÉ BELGA MOBILITY VOUS GARANTIE</h2>
          </div>
          <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-4">
            <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <img class="w-16 h-16 mx-auto" :src="incentive.imageSrc" alt="" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900">
                  {{ incentive.name }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{ incentive.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--  Testimonial section-->

  <div class="bg-white relative overflow-hidden">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto overflow-hidden">
        <img src="img/belga.jpg" alt="pizza_together" class="lg:ml-56 w-full h-full object-center object-cover" />
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-10" />
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white" />
    </div>

    <!-- Callout -->
    <section aria-labelledby="sale-heading" class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="sale-heading" class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Votre avis est très important pour nous!
        </h2>
        <p class="mt-4 max-w-xl mx-auto text-2xl text-gray-600" id="text_comment">Nous vous demandons de laisser un commentaire. Parce que vos commentaires sont notre meilleure publicité. Merci !</p>
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="rounded-full"><img class="h-28 mx-auto" src="img/Tripadvisor-Logo.png" alt="tripadvisor" /></span>
          <ChevronRightIcon class=" w-5 h-5 text-black" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900" >Que disent les gens ?</h2>

        <div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
              <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
            </svg>
            <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-5 lg:ml-0">
              <div class="flex items-center xl:col-span-1">
                <div class="flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[testimonial.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                </div>
              </div>
              <p class="text-xl text-gray-900 mt-2">
                {{ testimonial.quote }}
              </p>
              <cite class="mt-4 block font-semibold not-italic text-gray-900">
                {{ testimonial.attribution }}
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div>



  <Newsletter></Newsletter>
  <Contact></Contact>


</template>

<script>
import Contact from "../components/Contact"
import Newsletter from "../components/Newsletter"
import { CloudUploadIcon, LockClosedIcon, ChevronRightIcon, LocationMarkerIcon, CheckIcon  } from '@heroicons/vue/outline'
import { StarIcon, XCircleIcon } from '@heroicons/vue/solid'




const features = [
  {
    name: 'Votre experience',
    description: 'Chaque course est privilégié. BELGAMOBILITY vous assure un déplacemente en tout sécurité et 100% personnalisable.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Un service flexible',
    description: 'Professionnels et flexible, discrets et chaleureux, nos chaffeurs s\'adaptent à continuellement à vos requetes, à celles de vos clients ou de vos callaborateurs.',
    icon: LockClosedIcon,
  },
]

const blogPosts = [
  {
    id: 1,
    title: 'Gagnez du temps',
    href: '/Services',
    imageUrl:
        'img/clock.jpg',
    preview:
        'De la réservation à la fin de la course, en passant par les imprévus, Belga Mobility trouve des solutions de transports adaptés à vos besoins privés ou professionnels !',
  },
  {
    id: 2,
    title: 'Suivez votre chauffeur',
    href: '/Services',
    imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
        '**BULLSHIT** Les coordonnées de contact et la position du chauffeur vous sont communiquées en temps réel.',
  },
  {
    id: 3,
    title: 'Payez en ligne',
    href: '/Services',
    imageUrl:
        'img/payment.jpg',
    preview:
        'Plusieurs modalités de paiement et de facturations sont disponibles afin de correspondre à votre réalité.',
  },

]

const incentives = [
  {
    name: 'Relation de confiance',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "Notre chauffeur apprend à vous connaître et assure une présence fluide et réactive.",
  },
  {
    name: 'Disponibilité continue',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "Il se rend disponible comme point de contact et vous aide à facilement coordonner vos besoins de transports.",
  },
  {
    name: 'Flexibilité',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
        "Expert de la route, le chauffeur vous aide à faire face aux imprévus temporels ou logistiques.",
  },
  {
    name: 'Assurance d\'un travail accompli',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
        "Fiable, le chauffeur s’assure que le transport se déroule dans un environnement sécurisant et familial à la fin de la mission.",
  },
]

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
        'Meilleure pizza ever. La pate est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Je conseille vivement. Le personnel est super sympa et attentionné même quand il s\'agit du rush et que l\'on commande à emporter.',
    attribution: 'Florian Durie',
  },
  {
    id: 2,
    rating: 5,
    quote:
        'Honnêtement, depuis que j\'ai goûté aux succulentes pizzas de Pizza Vino, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection et les ingrédients sont de qualité et bien mis en valeur. Les assemblages sont savoureux et il y a une carte de suggestions qui change fréquemment.',
    attribution: 'Warlikka',
  },
  {
    id: 3,
    rating: 5,
    quote:
        'Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l\'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.',
    attribution: 'Gilles Marechal',
  },

]






export default {

  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
      address:"",
      destination:"",
      error:"",
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

        self.distance = response.rows[0].elements[0].distance

        self.$store.commit('setReservation', [
          {id:1, name:"Pick up address", "value":  self.address},
          {id:2,name:"Drop off address", "value":  self.destination},
          {id:3,name:"Temps de trajet", "value": response.rows[0].elements[0].duration['text']},
          {id:4,name:"Distance km"  , "value":response.rows[0].elements[0].distance['text']},
          {id:5,name:"Date de départ"  , "value":self.date}
        ])
        self.$store.commit('setDistance', response.rows[0].elements[0].distance)
        self.$store.commit('setDuration', response.rows[0].elements[0].duration)
        self.$store.commit('setDate', self.date)

        self.$router.push({name: 'Chooseyourcategory'})

      }
      /*eslint-enable */
    },

  },


  components: {
    Contact,
    Newsletter,
    StarIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    XCircleIcon,
    CheckIcon
  },


  setup() {
    return {
      incentives,
      features,
      blogPosts,
      testimonials,

    }
  },

  mounted() {
    /*eslint-disable */
        new google.maps.places.Autocomplete(
            document.getElementById('autocomplete1'),
        ),
        new google.maps.places.Autocomplete(
            document.getElementById('autocomplete2'),
        ),
        new google.maps.places.Autocomplete(
            document.getElementById('autocomplete3'),
        )
  },


  created(){
    this.$store.commit('setDistance')
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

