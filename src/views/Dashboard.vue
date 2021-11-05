<template>
  <div class="mx-auto max-w-7xl">
    <IncomingContact></IncomingContact>
    <AdminProduct></AdminProduct>
    <Users></Users>
    <Orders></Orders>
  </div>
</template>

<script>
import IncomingContact from '../components/dashboard/IncomingContact'
import AdminProduct from '../components/dashboard/AdminProduct'
import Users from '../components/dashboard/Users'
import Orders from '../components/dashboard/Orders'

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
    Orders
  },


  beforeMount() {

    this.user = JSON.parse(localStorage.getItem('bigStore'))
    this.axios.defaults.headers.common['Content-Type'] = 'application/json'
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
  },

}
</script>