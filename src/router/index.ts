import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
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
  },
  // Catch-all route to redirect to dashboard
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory('/matomo-dashboard-concept-vue-showcase/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
