
  <template>
    <Disclosure as="nav" class="bg-white shadow sticky top-0 z-50" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-12 w-auto" src="img/BELGA-MOBILITY.png" alt="belgamobility logo" />
              <img class="hidden lg:block h-8 w-auto" src="img/BELGA-MOBILITY.png" alt="Workflow" />
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link to="/" class="border-transparent text-gray-900 hover:border-indigo-600 hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </router-link>
            <router-link to="/About" class="border-transparent text-gray-900 hover:border-indigo-600 hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              About
            </router-link>
            <router-link to="/Services" class="border-transparent text-gray-900 hover:border-indigo-600 hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Services
            </router-link>
            <router-link v-if="this.user != null" to="/Reservation" class="border-transparent text-gray-900 hover:border-indigo-600 hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <span v-if="this.setUser.is_admin == 0 " >My reservations</span>
              <span v-if="this.setUser.is_admin == 1 ">My Dashboard</span>
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="https://wa.me/00393494257041" target="_blank" type="button" class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">View notifications</span>
              <img class="h-8 w-8 rounded-full" src="img/wlogo.png" alt="whatsapp" />
            </a>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div v-if="this.user != null">
                <MenuButton class="flex bg-white p-1 rounded-full text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-sm">
                  <UserCircleIcon class="h-5 w-5" ></UserCircleIcon>
                  <span class="ml-2 text-sm font-medium">{{ this.setUser.firstname }} {{ this.setUser.lastname }}</span>
                </MenuButton>
              </div>
              <div v-else>
                <MenuButton class="flex bg-white p-1 rounded-full text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-sm">
                  <UserCircleIcon class="h-5 w-5" ></UserCircleIcon>
                  <span class="ml-2 text-sm font-medium">Sign in / Sign up</span>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-if="! this.setUser" v-slot="{ active }">
                    <router-link to="/Register" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex']">
                      <PencilAltIcon class="h-6 w-6 mr-2" aria-hidden="true" />
                      S'inscrire
                    </router-link>
                  </MenuItem>
                  <MenuItem v-if="! this.setUser" v-slot="{ active }">
                    <router-link to="/Login" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex']">
                      <LoginIcon class="h-6 w-6 mr-2" aria-hidden="true" />
                      Connexion
                    </router-link>
                  </MenuItem>
                  <MenuItem v-if="this.setUser"  v-slot="{ active }">
                    <a href="/" @click="logout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex']">
                      <LogoutIcon  class="h-6 w-6 mr-2" aria-hidden="true" />
                      Se déconnecter
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton as="a" href="/" class="border-transparent text-gray-500 flex block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <HomeIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Home</span>
          </DisclosureButton>
          <DisclosureButton as="a" href="/Services" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block flex pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <ViewGridAddIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Services</span>
          </DisclosureButton>
          <DisclosureButton as="a" href="/About" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block flex pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <TagIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">About</span>
          </DisclosureButton>
          <DisclosureButton as="a" href="https://wa.me/00393494257041" target="_blank" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block flex pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <img class="h-6 w-6 rounded-full" src="img/wlogo.png" alt="whatsapp" />
            <span class="ml-2">Whatsapp</span>
          </DisclosureButton>
        </div>


        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <div class="text-base font-medium text-gray-800">Bienvenue</div>
              <div class="text-sm font-medium text-gray-500">{{ this.setUser.firstname }} {{ this.setUser.lastname }}</div>
            </div>
          </div>
          <div class="mt-3 space-y-1 ">
            <router-link v-show="this.user != null" to="/Reservation" class="px-4 py-2 text-base  font-medium text-gray-500 leading-5 flex justify-self-end">
                <span v-if="this.setUser.is_admin == 0 " class="flex">
                  <PencilAltIcon class="h-6 w-6 mr-2" aria-hidden="true" />
                  My reservations
                </span>
              <span v-if="this.setUser.is_admin == 1 " class="flex">
                  <PencilAltIcon class="h-6 w-6 mx-auto" aria-hidden="true" />
                  My admin >
                </span>
            </router-link>
            <DisclosureButton v-if="! this.setUser" as="a" href="/Register" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              <div class="flex">
                <PencilAltIcon class="h-6 w-6" aria-hidden="true" />
                <span class="ml-2">S'inscrire</span>
              </div>
            </DisclosureButton>
            <DisclosureButton v-if="! this.setUser" as="a" href="/Login" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              <div class="flex">
                <LoginIcon class="h-6 w-6" aria-hidden="true" />
                <span class="ml-2">Connexion</span>
              </div>
            </DisclosureButton>
            <DisclosureButton v-if="this.setUser" @click="logout" as="a" href="/" class="flex block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              <div class="flex">
                <LogoutIcon  class="h-6 w-6" aria-hidden="true" />
                <span class="ml-2">Se déconnecter</span>
              </div>
            </DisclosureButton>
          </div>
        </div>



      </DisclosurePanel>
    </Disclosure>

    <router-view/>

    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
            <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
              {{ item.name }}
            </a>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-400">
          &copy; 2021 Belga Mobility, Inc. All rights reserved.  Website carefully crafted  <a class="underline hover:text-gray-900" href="#" target="_blank">Us</a>
        </p>
      </div>
    </footer>

  </template>

  <script>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { MenuIcon, XIcon, UserCircleIcon, HomeIcon, LoginIcon, LogoutIcon, ViewGridAddIcon, TagIcon, PencilAltIcon, ViewListIcon } from '@heroicons/vue/outline'
    import { defineComponent, h } from 'vue'

    const navigation = {
      main: [
        { name: 'Conditions d\'utilisation', href: '/Terms' },
        { name: 'Privacy policy', href: '/Privacy' },
        { name: 'FAQ', href: '/Faq' },
      ],
      social: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/BELGA-Mobility-Executive-Chauffeured-Car-Service-108067070808810/',
          icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                  h('path', {
                    'fill-rule': 'evenodd',
                    d:
                        'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                    'clip-rule': 'evenodd',
                  }),
                ]),
          }),
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/belgamobility.be/',
          icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                  h('path', {
                    'fill-rule': 'evenodd',
                    d:
                        'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                    'clip-rule': 'evenodd',
                  }),
                ]),
          }),
        },
      ],
    }

    export default {

      data(){
        return {
          user:'',
          wa:false
        }
      },

      methods:{
        logout(){
          localStorage.removeItem('bigStore.jwt')
          localStorage.removeItem('bigStore.user')
          this.change()
          this.user = null
          this.$store.state.setUSer = ''
          this.$router.push('/')
        },

        waz(){
          this.wa = true
        }
      },

      computed: {

        setUser:{
          get(){
            return this.$store.state.setUser
          }
        },
      },


      components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        MenuIcon,
        XIcon,
        UserCircleIcon,
        HomeIcon,
        LoginIcon,
        LogoutIcon,
        ViewGridAddIcon,
        TagIcon,
        PencilAltIcon,
        ViewListIcon
      },

      setup() {
        return {
          navigation,
        }
      },

      beforeMount() {

        if (localStorage.getItem('bigStore.jwt') != null) {
          this.user = JSON.parse(localStorage.getItem('bigStore.user'))
          let user = this.user
          this.axios.defaults.headers.common['Content-Type'] = 'application/json'
          this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
          this.$store.commit('setUser', user)
        }

      },

    }
  </script>






