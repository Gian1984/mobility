import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VCalendar from 'v-calendar';

createApp(App).use(store).use(store).use(router).use(Vuex, store).use(VCalendar, {}).use(VueAxios, axios).mount('#app')
