<template>
  <div class="flex flex-col mb-10 max-h-screen ">
    <h1 class="mt-10 mb-4 p-4 font-bold text-3xl">Questions liées aux commandes</h1>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-2">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <div class="bg-white">
            <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
              <div class="mx-auto divide-y-2 divide-gray-200">
                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                  <Disclosure as="div" v-for="(faq,index) in faqs" v-bind:key="index" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                      <div class="text-sm text-gray-900">
                        Question sur la <span class="text-indigo-700">commande n° {{ faq.order_id }} </span>
                      </div>
                        <div class="justify-end flex">
                          <div class="inline ... ml-3 ">
                            <button v-if="faq.was_answered == 0" type="button" @click="answer(index)"  class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50">
                              <MailIcon class="h-4 w-4" aria-hidden="true" />
                            </button>
                            <button v-else type="button" @click="answer(index)"  class="inline-flex items-center px-2 py-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-green">
                              <CheckIcon class="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <div class="ml-2 inline ...">
                            <button type="button" @click="removeFaq(faq.id, index)" class="inline-flex items-center px-2 py-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                              <TrashIcon class="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <span class="ml-6 h-7 flex items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                          </span>
                        </div>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2">
                      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-500">
                                Full name
                              </dt>
                              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {{ faq.name }}
                              </dd>
                            </div>
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="flex text-sm font-medium text-gray-500">
                                <PhoneIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Phone
                              </dt>
                              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${faq.phone}`"><span class="leading-5 tracking-wide rounded-full">{{faq.phone}}</span></a>
                              </dd>
                            </div>
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="flex text-sm font-medium text-gray-500">
                                <MailIcon  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Email address:
                              </dt>
                              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <a class="pr-2 pl-2 inline-flex items-center underline ... hover:text-gray-700" :href="`mailto: ${faq.email}`"><span class="leading-5 tracking-wide rounded-full">{{faq.email}}</span></a><br>
                              </dd>
                            </div>
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="flex text-sm font-medium text-gray-500">
                                <QuestionMarkCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Answered ?
                              </dt>
                              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                     {{faq.was_answered == 1? "Yes" : "No"}}
                                </span>
                              </dd>
                            </div>
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="flex text-sm font-medium text-gray-500">
                                <DocumentTextIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Message
                              </dt>
                              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {{ faq.question }}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { MailIcon, TrashIcon, PhoneIcon, DocumentTextIcon, ClockIcon, MapIcon, QuestionMarkCircleIcon, ChevronDownIcon, CheckIcon} from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'



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
    QuestionMarkCircleIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    CheckIcon
  },

}
</script>