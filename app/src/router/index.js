import { createRouter, createWebHashHistory } from 'vue-router'
import LengthView from '../views/LengthView.vue'
import AreaView from '../views/AreaView.vue'
import VolumeView from '../views/VolumeView.vue'
import WeightView from '../views/WeightView.vue'
import TimeView from '../views/TimeView.vue'
const routes = [
  {
    path: '/',
    name: 'Length',
    component: LengthView
  },
  {
    path: '/area',
    name: 'Area',
    component: AreaView
  },
  {
    path: '/volume',
    name: 'Volume',
    component: VolumeView
  },
  {
    path: '/weight',
    name: 'Weight',
    component: WeightView
  },
  {
    path: '/Time',
    name: 'Time',
    component: TimeView
  },
  {
    path: '/temp',
    name: 'Temperature',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TempView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
