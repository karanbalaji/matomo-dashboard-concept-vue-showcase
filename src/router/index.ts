import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  // Add explicit route for the showcase path
  {
    path: '/matomo-dashboard-concept-vue-showcase',
    name: 'ShowcaseDashboard',
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

// Navigation guard to handle initial load
router.beforeEach((to, from, next) => {
  // If accessing the root of the showcase, show dashboard
  if (to.fullPath === '/matomo-dashboard-concept-vue-showcase/') {
    next('/')
  } else {
    next()
  }
})

export default router
