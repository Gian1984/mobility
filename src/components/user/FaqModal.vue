<template>

  <div class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-200">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>
        <!--body-->
        <div class="relative p-6 flex-auto">

              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-container">
                    <div class="modal-body">
                      <h5 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Question about</span>
                        {{ ' ' }}
                        <span class="block text-indigo-600 xl:inline">your order.</span>
                      </h5>
                      <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Here you can handle all your question.
                      </p>
                      <div>
                        <div class="flow-root mt-6">
                          <ul class="-my-5 divide-y divide-gray-200">
                            <li  class="py-5">
                              <div class="relative">
                                <h3 class="font-bold text-gray-800">
                                  Order n°{{data.id}}: <br><br>
                                </h3>

                                <label for="adress" class="block text-sm font-medium mt-2">Delivery to :</label>
                                <p class="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                                  {{ data.address }}
                                </p>

                                <label for="delivered" class="block text-sm font-medium mt-2">Is delivered :</label>
                                <p class="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                                  {{data.is_delivered == 1? "Shipped!" : "Not shipped"}}
                                </p>

                                <h3 class="font-bold text-gray-800 mt-6">
                                  Fill info contact : <br><br>
                                </h3>

                                <div class="sm:col-span-6">
                                  <div>
                                    <input id="name" name="name" v-model="name" type="text" autocomplete="name" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Joe Carter" />
                                  </div>
                                </div>

                                <div class="sm:col-span-6">
                                  <div class="mt-2">
                                    <input id="email" name="email" v-model="email" type="email" autocomplete="email" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: exapmle@example.com" />
                                  </div>
                                </div>

                                <div class="sm:col-span-6">
                                  <div class="mt-2">
                                    <input id="phone" name="phone" v-model="phone" type="number" autocomplete="phone" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: +39 344 435 ...." />
                                  </div>
                                </div>

                                <div>
                                  <div class="mt-2">
                                    <textarea v-model="question" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" rows="3" placeholder="Enter questions."></textarea>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="modal-footer">
                        <slot name="footer">
                          <button type="button" @click="uploadFile" class="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send
                          </button>
                          <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Leave
                          </button>
                        </slot>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { XIcon } from '@heroicons/vue/outline'

export default {

  props: ['order'],
  data() {
    return {
      attachment: null,
      question:"",
      name: "",
      phone: "",
      email:""
    }
  },

  computed: {
    data: function() {
      if (this.order != null) {
        return this.order
      }
      return {
        name: "",

      }
    }
  },

  methods: {
    uploadFile() {
      let product_id = this.order.product_id
      let user_id = this.order.user_id
      let order_id = this.order.id
      let quantity = this.order.quantity
      let address = this.order.address
      let name = this.name
      let phone = this.phone
      let email = this.email
      let question =  this.question
      /*eslint-disable */
      this.axios.post("http://localhost/api/upload-faq", { product_id, user_id, order_id, quantity, address,name, phone, email, question }).then(response => {
        this.$emit('close', this.order)
        this.question = ""
      })
    },

    close(){
      this.$emit('close', this.order)
      this.question = ""
    }
  },

  components:{
    XIcon
  },
}
</script>