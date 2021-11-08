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
                    <span class="block xl:inline">Order</span>
                    {{ ' ' }}
                    <span class="block text-indigo-600 xl:inline">Details</span>
                  </h5>
                  <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Here you can check details of your order.
                  </p>
                 <div v-for="(item, index) in data"  v-bind:key="index">


                  {{item.id}}



                  </div>


                  <div class="modal-footer">
                    <slot name="footer">
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


export default {

  props: ['order'],


  methods: {

    close(){
      this.$emit('close', this.order)
    }
  },

}
</script>