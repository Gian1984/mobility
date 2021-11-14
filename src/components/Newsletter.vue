<template>
  <div class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
          Sign up for our newsletter
        </h2>
        <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
          Inscrivez-vous à notre newsletter qui fait régulièrement le point sur toutes les nouveautés et promotions.
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form @submit.prevent="newsletterSubmit" class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="newsletter" name="email-address" type="email" autocomplete="email" required="" class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md" placeholder="Insérez votre email" />
          <div class="mt-3 shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="w-full flex items-center rounded-lg justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Je m'inscris
            </button>
          </div>
        </form>

<!--        Message succesfully subscribe-->

        <div class="mt-3" v-if="message" >
          <div v-if="alertsOpen" class="rounded-md bg-green-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">
                  {{ message }}
                </p>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button v-on:click="closeAlert()" type="button" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


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


      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon, XIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
  data(){
    return {
      newsletter:'',
      message: '',
      alertsOpen: true,
      data:'',
      error:'',
    }
  },

  components:{
    CheckCircleIcon, XIcon, XCircleIcon
  },

  methods : {
    newsletterSubmit(e) {
      e.preventDefault()

      let email = this.newsletter

      this.axios.post(process.env.VUE_APP_URL_API + 'api/newsletter', {email}).then(response => {
        this.data = response.data

        this.message = 'Thanks you! We will keep you up to date.'
        this.newsletter = "";

          // let nextUrl = this.$route.params.nextUrl
          // this.$router.push((nextUrl != null ? nextUrl : '/'))

      }).catch((error)=>{
        console.log(error.response.data)
        this.error = 'You have already subrscribe! Thank you!'
        this.newsletter = "";
      });
    },

    closeAlert: function(){
      this.alertsOpen = false;
    }
  }
}
</script>