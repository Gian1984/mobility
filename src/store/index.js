import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    contacts: '',
    reservation:'',
    reservationValue:'',
    detailReservation:'',
    setOption:''
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

    setOption(state, option) {
      state.setOption = option
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
