<template>
  <div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Website Analytics</h2>
      <button class="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:ring-offset-2 border border-gray-200 bg-white hover:bg-blue-500/5 h-10 px-4 py-2">
        Last 30 days
        <ChevronDown class="ml-2 h-4 w-4 text-gray-600" />
      </button>
    </div>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-white shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium text-gray-600">VISITS</h3>
          <TrendingUp class="h-4 w-4 text-blue-600/70" />
        </div>
        <div class="text-xl sm:text-2xl font-bold text-gray-900">{{ analytics.visits.toLocaleString() }}</div>
        <p class="text-xs text-gray-500">
          <span :class="analytics.periodComparison.visits > 0 ? 'text-green-600/70' : 'text-red-600/70'">
            {{ analytics.periodComparison.visits > 0 ? '+' : '' }}{{ analytics.periodComparison.visits }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-white shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium text-gray-600">UNIQUE VISITORS</h3>
          <Users class="h-4 w-4 text-blue-600/70" />
        </div>
        <div class="text-xl sm:text-2xl font-bold text-gray-900">{{ analytics.uniqueVisitors.toLocaleString() }}</div>
        <p class="text-xs text-gray-500">
          <span :class="analytics.periodComparison.uniqueVisitors > 0 ? 'text-green-600/70' : 'text-red-600/70'">
            {{ analytics.periodComparison.uniqueVisitors > 0 ? '+' : '' }}{{ analytics.periodComparison.uniqueVisitors }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-white shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium text-gray-600">ACTIONS PER VISIT</h3>
          <MousePointer class="h-4 w-4 text-blue-600/70" />
        </div>
        <div class="text-xl sm:text-2xl font-bold text-gray-900">{{ analytics.actionsPerVisit }}</div>
        <p class="text-xs text-gray-500">
          <span :class="analytics.periodComparison.actionsPerVisit > 0 ? 'text-green-600/70' : 'text-red-600/70'">
            {{ analytics.periodComparison.actionsPerVisit > 0 ? '+' : '' }}{{ analytics.periodComparison.actionsPerVisit }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-white shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium text-gray-600">BOUNCE RATE</h3>
          <ArrowUpRight class="h-4 w-4 text-blue-600/70" />
        </div>
        <div class="text-xl sm:text-2xl font-bold text-gray-900">{{ analytics.bounceRate }}%</div>
        <p class="text-xs text-gray-500">
          <span :class="analytics.periodComparison.bounceRate < 0 ? 'text-green-600/70' : 'text-red-600/70'">
            {{ analytics.periodComparison.bounceRate > 0 ? '+' : '' }}{{ analytics.periodComparison.bounceRate }}%
          </span> vs last period
        </p>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6">
      <!-- Visitors Chart -->
      <div class="lg:col-span-1">
        <VisitorsChart />
      </div>

      <!-- Top Pages -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg p-4 shadow border h-full">
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Top Pages</h3>
            <p class="text-sm text-gray-500">Most visited pages this month</p>
          </div>
          <div class="space-y-4">
            <div v-for="(page, index) in topPages" :key="index" 
                 class="flex items-center justify-between hover:bg-blue-500/5 p-2 rounded-md cursor-pointer">
              <div class="space-y-1">
                <p class="text-sm font-medium leading-none text-gray-900">{{ page.name }}</p>
                <p class="text-sm text-gray-500">{{ page.views.toLocaleString() }} views</p>
              </div>
              <div class="ml-4">
                <TrendingUp class="h-4 w-4 text-green-600/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ChevronDown, TrendingUp, Users, MousePointer, ArrowUpRight } from 'lucide-vue-next'
import VisitorsChart from '@/components/VisitorsChart.vue'

const store = useStore()
const analytics = computed(() => store.state.analytics)
const topPages = [
  { name: '/home', views: 4521 },
  { name: '/products', views: 3255 },
  { name: '/about', views: 2841 },
  { name: '/contact', views: 2501 },
  { name: '/blog', views: 2024 }
]
</script>