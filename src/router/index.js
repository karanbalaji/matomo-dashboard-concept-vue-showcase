import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/visitors',
    name: 'Visitors',
    component: () => import('../views/Visitors.vue')
  },
  {
    path: '/real-time',
    name: 'RealTime',
    component: () => import('../views/RealTime.vue')
  },
  {
    path: '/behavior',
    name: 'Behavior',
    component: () => import('../views/Behavior.vue')
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import('../views/Goals.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('../views/Locations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
