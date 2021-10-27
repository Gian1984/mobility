<template>
  <nav aria-label="Progress">
    <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex-1 md:flex">
        <a v-if="step.status === 'complete'" :href="step.href" class="group flex items-center w-full">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
            <span class="text-indigo-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="group flex items-center">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
              <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
          </span>
        </a>
        <template v-if="(stepIdx !== steps.length - 1)">
          <!-- Arrow separator for lg screens and up -->
          <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>


  <!--  choosen option section-->

  <div class="bg-gray-200">
    <dl class="grid grid-cols-1 rounded-lg overflow-hidden shadow divide-y divide-gray-600 md:grid-cols-6 md:divide-y-0 md:divide-x">
      <div v-for="item in stats" :key="item.name" class="px-4 py-2 sm:p-2">
        <dt class="text-base font-normal text-gray-900">
          {{ item.name }}
        </dt>
      </div>
    </dl>
  </div>



<!--  Car options-->

  <div class="bg-white">
    <div class="max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
      <div class="max-w-xl">
        <h1 id="your-orders-heading" class="text-3xl font-extrabold tracking-tight text-gray-900">Your Orders</h1>
        <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section v-for="order in orders" :key="order.number" :aria-labelledby="`${order.number}-heading`">
          <div class="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
            <h2 :id="`${order.number}-heading`" class="text-lg font-medium text-gray-900 md:flex-shrink-0">Order #{{ order.number }}</h2>
            <div class="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
              <p class="text-sm font-medium text-gray-500">
                {{ order.status }}
              </p>
              <div class="flex text-sm font-medium">
                <a :href="order.href" class="text-indigo-600 hover:text-indigo-500">Manage order</a>
                <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <a :href="order.invoiceHref" class="text-indigo-600 hover:text-indigo-500">View Invoice</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
            <div v-for="product in order.products" :key="product.id" class="py-6 sm:flex">
              <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="flex-none w-40 h-20 rounded-md object-center object-cover sm:w-3/5 sm:h-3/5" />
                <div class="pt-1.5 min-w-0 flex-1 sm:pt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    <a :href="product.href">{{ product.name }}</a>
                  </h3>
                  <p class="text-sm text-gray-500 truncate">
                    <span>{{ product.color }}</span>
                    {{ ' ' }}
                    <span class="mx-1 text-gray-400" aria-hidden="true">&middot;</span>
                    {{ ' ' }}
                    <span>{{ product.size }}</span>
                  </p>

                </div>
              </div>
              <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                <p class="mt-1 font-medium text-gray-900">{{ product.price }}</p>
                <p class="text-sm text-gray-500 truncate">
                  <span>{{ product.color }}</span>
                  {{ ' ' }}
                </p>
                <button type="button" class="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                  Buy again
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>


</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'

const steps = [
  { id: '01', name: 'Choose your category', href: '#', status: 'current' },
  { id: '02', name: 'Options', href: '#', status: 'upcoming' },
  { id: '03', name: 'Checkout', href: '#', status: 'upcoming' },
  { id: '04', name: 'Payement', href: '#', status: 'upcoming' },
  { id: '05', name: 'Recap', href: '#', status: 'upcoming' },
]

const stats = [
  { name: 'Pick up address' },
  { name: 'Drop off address' },
  { name: 'Temps de trajet' },
  { name: 'distance km' },
  { name: 'date de départ' },
  { name: 'heure de départ' },
]

const orders = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'All prices include VAT, fees & tip.',
        size: '3" x 3" x 3"',
        imageSrc: 'img/e_side.png',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      {
        id: 2,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'All prices include VAT, fees & tip.',
        size: '3" x 3" x 3"',
        imageSrc: 'img/e_side.png',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      {
        id: 3,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'All prices include VAT, fees & tip.',
        size: '3" x 3" x 3"',
        imageSrc: 'img/e_side.png',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      // More products...
    ],
  },

  // More orders...
]

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      steps,
      orders,
      stats,
    }
  },
}
</script>