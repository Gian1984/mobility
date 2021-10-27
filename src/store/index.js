import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    contact: '',
  },
  mutations: {

    getContact(state, contact) {
      state.contact = contact
    },
  },
  actions: {

    getContact({ commit }) {
      axios.get('http://localhost/api/contact/').then(response => {
        commit('getContact', response.data)
      })
          .catch(error => {
            console.log(error);
          })
    },
  },
  modules: {
  }
})
