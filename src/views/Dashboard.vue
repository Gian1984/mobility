<template>
  <div class="mx-auto max-w-7xl">
    <IncomingContact></IncomingContact>
  </div>
</template>

<script>
import IncomingContact from '../components/dashboard/IncomingContact'

export default {
  data() {
    return {
      user: null,
      activeComponent: null
    }
  },
  components: {
    IncomingContact
  },


  beforeMount() {

    this.user = JSON.parse(localStorage.getItem('bigStore'))
    this.axios.defaults.headers.common['Content-Type'] = 'application/json'
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
  },

}
</script>