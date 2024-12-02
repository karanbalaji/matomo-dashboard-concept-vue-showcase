import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    alias: ['/dashboard', '/matomo-dashboard-concept-vue-showcase']
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
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Navigation guard to ensure dashboard is loaded
router.beforeEach((to, from, next) => {
  // If it's the root path with no route, load dashboard
  if (to.fullPath === '/matomo-dashboard-concept-vue-showcase/') {
    next({ name: 'Dashboard' })
    return
  }
  next()
})

export default router
