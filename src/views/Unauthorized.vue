<template>
  <main class="min-h-screen  bg-top sm:bg-top" style="background-image: url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75');">
    <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
      <p class="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">Vous devez vous connecter pour continuer.</p>
      <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Commencez à utiliser Belgamobility dès aujourd'hui.</h1>
      <p class="mt-2 text-lg font-medium text-black text-opacity-50">Créez votre compte, c'est gratuit et ne prend que quelques minutes !</p>
      <div class="mt-6">
        <div class="space-x-4 ...">
          <div class="inline-block ...">
            <button @click="login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              Se connecter
            </button>
          </div>
          <div class="inline-block ...">
            <button @click="register" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {

  methods:{

    login() {
      this.$router.push({name: 'Login'})
    },
    register() {
      this.$router.push({name: 'Register'})
    },

  },

}

</script>