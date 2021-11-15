<template>

  <h1 class="mt-10 mb-4 p-2 font-bold text-3xl">Questions liées aux commandes</h1>

  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(faq,index) in faqs" v-bind:key="index">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate">
               <br>
              Ref. n° {{ faq.id }} {{ faq.name }}
            </p>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                <MailIcon  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${faq.email}`"><span class="leading-5 tracking-wide rounded-full">{{faq.email}}</span></a><br>
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <PhoneIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${faq.phone}`"><span class="leading-5 tracking-wide rounded-full">{{faq.phone}}</span></a><br>
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {{ faq.question }}
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                <QuestionMarkCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Answered
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                 <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   {{faq.was_answered == 1? "Yes" : "No"}}
                 </span>
              </p>
            </div>

            <div class="sm:flex mt-2">
              <div>
                <button v-if="faq.was_answered == 0" type="button" @click="answer(index)"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send
                  <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div class="ml-2 mt-2 lg:mt-0">
                <button type="button" @click="removeFaq(faq.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <TrashIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>


</template>

<script>
import { MailIcon, TrashIcon, PhoneIcon} from '@heroicons/vue/outline'
import { DocumentTextIcon, ClockIcon, MapIcon, QuestionMarkCircleIcon } from '@heroicons/vue/outline'


export default {
  data() {
    return {
      faqs : []
    }
  },
  beforeMount(){
    this.axios.get(process.env.VUE_APP_URL_API + 'api/faqs').then(response => this.faqs = response.data)
  },

  /*eslint-disable */

  methods: {
    answer(index) {
      let faq = this.faqs[index]
      this.axios.patch(process.env.VUE_APP_URL_API + `api/faqs/${faq.id}/replied`).then(response => {
        this.faqs[index].was_answered = 1
        this.$forceUpdate()
      })
    },
    removeFaq(faqID, index){


      this.axios.delete(process.env.VUE_APP_URL_API + "api/faqs/"+ faqID)
          .then( response => this.faqs.splice(index, 1))

          .catch(error =>{
            console.log(error);
          })
    },

  },

  components: {
    MailIcon,
    TrashIcon,
    DocumentTextIcon,
    ClockIcon,
    MapIcon,
    PhoneIcon,
    QuestionMarkCircleIcon
  },

}
</script>