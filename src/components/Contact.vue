<template>
  <div class="bg-white px-4 py-5 sm:rounded-lg sm:p-6 max-w-7xl mx-auto">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1 mt-10">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Contact</h3>
        <p class="mt-1 text-sm text-gray-500">
          Belgamobility propose un service de location de voiture avec un Chaffeur privé, au départ de la Belgique.
          Experts et flexible, discrets et chaleureux, nos chaffeurs s'adaptent à vos besoins professionnels ou privés.
          Notre chauffeur professionnel vous assure un expérience 100% personnalisée.
        </p>
      </div>
      <div class="md:mt-0 md:col-span-2">
        <form @submit.prevent="contactSubmit">
          <div class=" sm:overflow-hidden">
            <div class="bg-white py-6 px-4 sm:p-6">
              <div class="mt-6 grid grid-cols-6 gap-6">

                <div class="col-span-6 sm:col-span-3">
                  <label for="object" class="block text-sm font-medium text-gray-900">Objet</label>
                  <input type="text" v-model="subject" name="subject" id="subject" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="full-name" class="block text-sm font-medium text-gray-900">Nom et prénom</label>
                  <input type="text" v-model="fullname" name="full-name" id="full-name" autocomplete="cc-family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="email-address" class="block text-sm font-medium text-gray-900">Adresse e-mail</label>
                  <input type="text" v-model="email" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="block text-sm font-medium text-gray-900">
                    Numéro de téléphone
                  </label>
                  <input type="text" v-model="phone" name="phone-number" id="phone-number" autocomplete="tel" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="description" class="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <div class="mt-1">
                    <textarea id="description" v-model="comment" name="description" rows="4" class="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

              </div>
            </div>
            <div class="px-4 py-3 text-center sm:px-6">
              <button type="submit" class="bg-gray-700 border border-transparent rounded-md shadow-sm py-2 px-32 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fullname : "",
      email : "",
      phone : "",
      subject:"",
      comment:"",
      errorsRegister:"",
    }
  },

  methods : {
    contactSubmit(e) {
      e.preventDefault()
      let fullname = this.fullname
      let email = this.email
      let phone = this.phone
      let subject = this.subject
      let comment = this.comment
      this.axios.post('http://localhost/api/upload-contact', {fullname, email, phone, subject, comment}).then(response => {
        let data = response.data
        console.log(data)

          // let nextUrl = this.$route.params.nextUrl
          // this.$router.push((nextUrl != null ? nextUrl : '/'))

      }).catch((error)=>{
        this.errorsRegister = error.response.data
      });
    }
  }

}
</script>