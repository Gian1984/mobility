import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Reservation from '../views/Reservation.vue'
import Dashboard from '../views/Dashboard.vue'
import Chooseyourcategory from '../views/Chooseyourcategory.vue'
import Choosehourly from '../views/Choosehourly.vue'
import Options from '../views/Options.vue'
import Checkout from '../views/Checkout.vue'
import ForgetPassword from '../views/ForgetPassword'
import ResetPassword from '../views/ResetPassword.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Faq from '../views/Faq.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import IncomingContact from '../components/dashboard/IncomingContact.vue'
import AdminProduct from '../components/dashboard/AdminProduct.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
      path: "/Services",
      name: "Services",
      component: Services,
  },
  {
    path: '/Chooseyourcategory',
    name: 'Chooseyourcategory',
    component: Chooseyourcategory,
  },
  {
    path: '/Choosehourly',
    name: 'Choosehourly',
    component: Choosehourly,
  },
  {
    path: "/Options/:id",
    name: "Options",
    component:  Options,
  },
  {
    path: "/Checkout/:id",
    name: "Checkout",
    component:  Checkout,
  },
  {
    path: '/Reservation',
    name: 'Reservation',
    component: Reservation,
  },
  {
    path: "/forgetpassword",
    name: "Forgetpassword",
    component: ForgetPassword,
  },
  {
    path: "/Resetpassword/:token",
    name: "Reset-password",
    component: ResetPassword,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/IncomingContact",
    name: "IncomingContact",
    component: IncomingContact,
  },
  {
    path: "/AdminProduct",
    name: "AdminProduct",
    component: AdminProduct,
  },
  {
    path: "/Terms",
    name: 'Terms',
    component: Terms,
  },
  {
    path: "/Privacy",
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: "/Faq",
    name: 'Faq',
    component: Faq,
  },
  {
    path: "/:catchAll(.*)",
    name: 'PageNotFound',
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// const router = createRouter({
//
//   history: createWebHistory(),
//
//   routes: [
//
//     {
//       path: "/",
//       name: "Home",
//       component: Home,
//     },
//     {
//       path: "/About",
//       name: "About",
//       component: About,
//     },
//     {
//       path: "/Services",
//       name: "Services",
//       component: Services,
//     },
//     {
//       path: "/Dashboard",
//       name: "Dashboard",
//       component: Dashboard,
//       meta: {
//         requiresAuth: true,
//         is_admin: true
//       }
//     },
//     {
//       path: '/Dashboard/:pages',
//       name: 'Dashboard-pages',
//       component: Dashboard,
//       meta: {
//         requiresAuth: true,
//         is_admin: true
//       }
//     },
//     {
//       path: "/Checkout/:id",
//       name: "Checkout",
//       component: Checkout,
//     },
//     {
//       path: "/Confirmation",
//       name: "Confirmation",
//       component: Confirmation,
//     },
//     {
//       path: "/Login",
//       name: "Login",
//       component: Login,
//     },
//     {
//       path: "/Register",
//       name: "Register",
//       component: Register,
//     },
//     {
//       path: "/Products/:id",
//       name: "SingleProducts",
//       component: SingleProduct,
//     },
//
//     {
//       path: "/Reservation",
//       name: "Reservation",
//       component: Reservation,
//       meta: {
//         requiresAuth: true,
//         is_user: true
//       }
//     },
//     {
//       path: "/Forgetpassword",
//       name: "Forgetpassword",
//       component: Forgetpassword,
//     },
//     {
//       path: "/Reset-password/:token",
//       name: "ResetPassword",
//       component: ResetPassword,
//     },
//   ]
// })
//
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('bigStore.jwt') == null) {
//       next({
//         path: '/Login',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       let user = JSON.parse(localStorage.getItem('bigStore.user'))
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next()
//         }
//         else {
//           next({ name: '/Reservation' })
//         }
//       }
//       else if (to.matched.some(record => record.meta.is_user)) {
//         if (user.is_admin == 0) {
//           next()
//         }
//         else {
//           next({ name: '/Dashboard' })
//         }
//       }
//       next()
//     }
//   } else {
//     next()
//   }
// })
//
//
// export default router;