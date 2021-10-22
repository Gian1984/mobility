<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">


          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div class="mt-1">
              <input id="username" name="username" type="username" v-model="username" autocomplete="username" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>


          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" v-model="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
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
      username : "",
      email : "",
      password : "",
      errorsRegister:"",
    }
  },

  methods : {
    handleSubmit(e) {
      e.preventDefault()
      let name = this.username
      let email = this.email
      let password = this.password
      this.axios.post('http://localhost/api/register', {name, email, password}).then(response => {
        let data = response.data
        localStorage.setItem('bigStore.user', JSON.stringify(data.user))
        localStorage.setItem('bigStore.jwt', data.token)
        if (localStorage.getItem('bigStore.jwt') != null) {
          this.$emit('loggedIn')

          // let nextUrl = this.$route.params.nextUrl
          // this.$router.push((nextUrl != null ? nextUrl : '/'))
        }
      }).catch((error)=>{
        this.errorsRegister = error.response.data
      });
    }
  }
}
</script>