<template>

  {{product}}
  <nav aria-label="Progress">
    <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex-1 md:flex">
        <a v-if="step.status === 'complete'" :href="step.href" class="group flex items-center w-full">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
            <span class="text-indigo-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="group flex items-center">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
              <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
          </span>
        </a>
        <template v-if="(stepIdx !== steps.length - 1)">
          <!-- Arrow separator for lg screens and up -->
          <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>

  <!--  choosen option section-->

  {{orderReservation}}


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


  <!--Checkout-->

  {{setOption}}

  {{user}}

  <main class="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
    <h1 class="sr-only">Checkout</h1>

    <div class="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div class="max-w-lg mx-auto w-full">
        <h2 class="sr-only">Order summary</h2>

<!--        <div class="flow-root">-->
<!--          <ul role="list" class="-my-6 divide-y divide-gray-200">-->
<!--            <li class="py-6 flex space-x-6">-->
<!--              <img :src="product.image" alt="product.imageAlt" class="flex-none object-center object-cover bg-gray-100 rounded-md" />-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

        <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">

          <div class="flex justify-between">
            <dt>Flight</dt>
            <dd class="text-gray-900">{{setOption.flight}}</dd>
          </div>

          <div class="flex justify-between">
            <dt>Pickup sign</dt>
            <dd class="text-gray-900">{{setOption.pickupsign}}</dd>
          </div>

          <div class="flex justify-between">
            <dt>Reference code</dt>
            <dd class="text-gray-900">{{setOption.referencecode}}</dd>
          </div>

          <div class="flex justify-between">
            <dt>Notes</dt>
            <dd class="text-gray-900">{{setOption.notes}}</dd>
          </div>

          <div class="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
            <dt class="text-base">Total</dt>
            <dd class="text-base">€ {{setOption.amount}}</dd>
          </div>
        </dl>
      </div>

      <div class="max-w-lg mx-auto w-full">
        <button type="button" class="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
          <span class="sr-only">Pay with Apple Pay</span>
          <svg class="h-5 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">
            <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
          </svg>
        </button>

        <div class="relative mt-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200" />
          </div>
          <div class="relative flex justify-center">
              <span class="px-4 bg-white text-sm font-medium text-gray-500">
                or
              </span>
          </div>
        </div>

        <form @submit.prevent="placeOrder" class="mt-6">
          <h2 class="text-lg font-medium text-gray-900">Payment information</h2>

          <div class="mt-6">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input v-model="customer.email" type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="mt-6">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
            <div class="mt-1">
              <input v-model="customer.phone" type="text" name="phone" id="phone" autocomplete="tel" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="mt-6">
            <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
            <div class="mt-1">
              <div id="card-element"></div>
            </div>
          </div>

          <div class="mt-6 flex space-x-2">
            <div class="flex items-center h-5">
              <input id="terms" name="terms" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
            </div>
            <label for="terms" class="text-sm text-gray-500">I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.</label>
          </div>

          <button type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed">Continue</button>
        </form>

        <div v-if="error  != 0" class="rounded-md bg-red-50 p-4 mt-10">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                There were errors with your payment!
              </h3>
              <div class="mt-2 text-sm text-red-700">
                {{ error }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>

</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import { CheckIcon, XCircleIcon } from '@heroicons/vue/solid'

const steps = [
  { id: '01', name: 'Choose your category', href: '/Chooseyourcategory', status: 'complete' },
  { id: '02', name: 'Options', href: '/Options', status: 'complete' },
  { id: '03', name: 'Checkout', href: '/Checkout', status: 'current' },
  { id: '04', name: 'Payement', href: '/Payement', status: 'upcoming' },
  { id: '05', name: 'Recap', href: '/Recap', status: 'upcoming' },
]

const stats = [
  { name: 'Pick up address' },
  { name: 'Drop off address' },
  { name: 'Temps de trajet' },
  { name: 'distance km' },
  { name: 'date de départ' },
  { name: 'heure de départ' },
]

export default {

  data(){
    return {
      stripe: {},
      cardElement: {},
      customer: {
        email: '',
        phone : "",
      },
      user:'',
      paymentProcessing: false,
      error:'',
      isLoggedIn : null,
      product : [],
      pid: this.$route.params.id
    }
  },

  async mounted() {
    this.isLoggedIn = localStorage.getItem('bigStore.jwt') != null
    this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_KEY);
    const elements = this.stripe.elements();
    this.cardElement = elements.create('card', {
      classes: {
        base: 'rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
      }
    });
    this.cardElement.mount('#card-element');
  },
  beforeMount() {
    this.axios.get('http://localhost/api/products/'+ this.pid).then(response => this.product = response.data)

    if (localStorage.getItem('bigStore.jwt') != null) {
      this.user = JSON.parse(localStorage.getItem('bigStore.user'))
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
    }

    this.axios.get(`http://localhost/api/users/${this.user.id}`).then(response => this.user = response.data)
  },

  methods : {
    login() {
      this.$router.push({name: 'Login', params: {nextUrl: this.$route.fullPath}})
    },
    register() {
      this.$router.push({name: 'Register', params: {nextUrl: this.$route.fullPath}})
    },

    async placeOrder(e) {
      e.preventDefault()

      this.paymentProcessing = true;



      const {paymentMethod, error} = await this.stripe.createPaymentMethod(
          'card', this.cardElement, {
            email: this.email,
            phone: this.phone,
          }
      );

      if (error) {
        this.paymentProcessing = false;
        console.error(error);
      } else {

        console.log(paymentMethod);
        let orderReservation = this.orderReservation
        let setoption = this.setOption
        let pickupaddress = orderReservation.pickupaddress
        let dropoffaddress = orderReservation.dropoffaddress
        let duration = orderReservation.duration
        let distance = orderReservation.distance
        let date = orderReservation.date
        let flight = setoption.flight
        let pickupsign = setoption.pickupsign
        let referencecode = setoption.referencecode
        let amount = this.setOption.amount * 100
        let notes = setoption.notes
        let lastname = setoption.lastname
        let firstname = setoption.firstname
        let email = setoption.email
        let phone = setoption.phone
        let payment_method_id = paymentMethod.id;
        let is_complete = 1;
        let product_id = setoption.productID

        this.axios.post('http://localhost/api/orders/',
            {
              pickupaddress,
              dropoffaddress,
              duration,
              distance,
              date,
              pickupsign,
              flight,
              is_complete,
              product_id,
              amount,
              payment_method_id,
              referencecode,
              notes,
              lastname,
              firstname,
              email,
              phone
            })
            .then((response) => {
              this.paymentProcessing = false;
              console.log(response);
              this.$router.push({ name: 'Confirmation' });
            })
            .catch((error) => {
              this.paymentProcessing = false;
              this.error = error.response.data.message;
            });
      }
    },

  },

  computed: {

    setOption:{
      get(){
        return this.$store.state.setOption
      }
    },

    orderReservation:{
      get(){
        return this.$store.state.setOrderReservation
      }
    },

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
    XCircleIcon
  },
  setup() {
    return {
      steps,
      stats,
    }
  },
}
</script>