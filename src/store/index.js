import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    reservation:'',
    reservationValue:'',
    detailReservation:'',
    setOrderReservation:'',
    setOption:'',
    setUser:'',
  },
  mutations: {

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

  },

  getters:{
    returnDistance: state => {
      return state.distance
    }
  },


  modules: {
  }
})
