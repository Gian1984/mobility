<template>
  <div class="mx-auto max-w-7xl">
    <IncomingContact></IncomingContact>
    <Faqs></Faqs>
    <Users></Users>
    <Orders></Orders>
    <AdminProduct></AdminProduct>
  </div>
</template>

<script>
import IncomingContact from '../components/dashboard/IncomingContact'
import AdminProduct from '../components/dashboard/AdminProduct'
import Users from '../components/dashboard/Users'
import Orders from '../components/dashboard/Orders'
import Faqs from '../components/dashboard/Faqs'

export default {
  data() {
    return {
      user: null,
      activeComponent: null
    }
  },
  components: {
    IncomingContact,
    AdminProduct,
    Users,
    Orders,
    Faqs
  },


  beforeMount() {

    let user = JSON.parse(localStorage.getItem('bigStore.user'))
    if (user.is_admin == 1) {

      this.user = JSON.parse(localStorage.getItem('bigStore'))
      this.axios.defaults.headers.common['Content-Type'] = 'application/json'
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')

      }
      else {
        this.$router.push({ name: '/Dashboard' })
      }



  },


}
</script>