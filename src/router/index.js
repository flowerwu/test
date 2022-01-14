import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new Router({
  routes
})

export default router