import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    contacts: '',
    distance:'',
    duration:'',
    date:'',
    reservation:''
  },
  mutations: {

    getContactList(state, contacts) {
      state.contacts = contacts
    },
    setDistance(state, distance){
      state.distance = distance
    },
    setDuration(state, duration){
      state.duration = duration
    },
    setDate(state, date){
      state.date = date
    },
    setReservation(state, reservation){
      state.reservation = reservation
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
