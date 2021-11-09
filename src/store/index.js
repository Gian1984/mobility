import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    contacts:'',
    reservation:'',
    reservationValue:'',
    detailReservation:'',
    setOrderReservation:'',
    setOption:'',
    setUser:'',
  },
  mutations: {

    getContactList(state, contacts) {
      state.contacts = contacts
    },

    setReservation(state, reservation){
      state.reservation = reservation
    },
    setReservationValue(state, reservationValue){
      state.reservationValue = reservationValue
    },
    detailReservation(state, product ){
      state.detailReservation = product
    },
    setOrderReservation(state, order){
      state.setOrderReservation = order
    },

    setOption(state, option) {
      state.setOption = option
    },

    setUser(state, user) {
      state.setUser = user
    }


  },
  actions: {

    getContactList({ commit }) {
      axios.get('http://localhost/api/contact/').then(response => {
        commit('getContactList', response.data)
      })
          .catch(error => {
            console.log(error);
          })
    },
  },

  getters:{
    returnDistance: state => {
      return state.distance
    }
  },


  modules: {
  }
})
