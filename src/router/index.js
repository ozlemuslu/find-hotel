import Vue from 'vue';
import VueRouter from 'vue-router';
import FindHotels from '../views/FindHotels.vue';
import AddHotels from '../views/AddHotels.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FindHotels',
    component: FindHotels,
  },
  {
    path: '/add-hotels',
    name: 'AddHotels',
    component: AddHotels,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router