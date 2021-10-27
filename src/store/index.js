import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    contacts: '',
  },
  mutations: {

    getContactList(state, contacts) {
      state.contacts = contacts
    },
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
  modules: {
  }
})
