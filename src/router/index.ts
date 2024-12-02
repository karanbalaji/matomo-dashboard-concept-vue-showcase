import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '') // Remove trailing slash if present

const routes: Array<RouteRecordRaw> = [
  {
    path: baseUrl,
    name: 'Root',
    redirect: `${baseUrl}/dashboard`
  },
  {
    path: `${baseUrl}/dashboard`,
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: `${baseUrl}/visitors`,
    name: 'Visitors',
    component: () => import('../views/Visitors.vue')
  },
  {
    path: `${baseUrl}/real-time`,
    name: 'RealTime',
    component: () => import('../views/RealTime.vue')
  },
  {
    path: `${baseUrl}/behavior`,
    name: 'Behavior',
    component: () => import('../views/Behavior.vue')
  },
  {
    path: `${baseUrl}/goals`,
    name: 'Goals',
    component: () => import('../views/Goals.vue')
  },
  {
    path: `${baseUrl}/locations`,
    name: 'Locations',
    component: () => import('../views/Locations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
