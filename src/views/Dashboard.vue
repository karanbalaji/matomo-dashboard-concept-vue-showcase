<template>
  <div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Website Analytics</h2>
      <button class="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Last 30 days
        <ChevronDown class="ml-2 h-4 w-4" />
      </button>
    </div>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">VISITS</h3>
          <TrendingUp class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="text-xl sm:text-2xl font-bold">{{ analytics.visits.toLocaleString() }}</div>
        <p class="text-xs text-muted-foreground">
          <span :class="analytics.periodComparison.visits > 0 ? 'text-emerald-500' : 'text-red-500'">
            {{ analytics.periodComparison.visits > 0 ? '+' : '' }}{{ analytics.periodComparison.visits }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">UNIQUE VISITORS</h3>
          <Users class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="text-xl sm:text-2xl font-bold">{{ analytics.uniqueVisitors.toLocaleString() }}</div>
        <p class="text-xs text-muted-foreground">
          <span :class="analytics.periodComparison.uniqueVisitors > 0 ? 'text-emerald-500' : 'text-red-500'">
            {{ analytics.periodComparison.uniqueVisitors > 0 ? '+' : '' }}{{ analytics.periodComparison.uniqueVisitors }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">ACTIONS PER VISIT</h3>
          <MousePointer class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="text-xl sm:text-2xl font-bold">{{ analytics.actionsPerVisit }}</div>
        <p class="text-xs text-muted-foreground">
          <span :class="analytics.periodComparison.actionsPerVisit > 0 ? 'text-emerald-500' : 'text-red-500'">
            {{ analytics.periodComparison.actionsPerVisit > 0 ? '+' : '' }}{{ analytics.periodComparison.actionsPerVisit }}%
          </span> vs last period
        </p>
      </div>

      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">BOUNCE RATE</h3>
          <ArrowUpRight class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="text-xl sm:text-2xl font-bold">{{ analytics.bounceRate }}%</div>
        <p class="text-xs text-muted-foreground">
          <span :class="analytics.periodComparison.bounceRate < 0 ? 'text-emerald-500' : 'text-red-500'">
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
        <div class="bg-card rounded-lg p-4 shadow h-full">
          <div class="mb-4">
            <h3 class="text-lg font-semibold">Top Pages</h3>
            <p class="text-sm text-muted-foreground">Most visited pages this month</p>
          </div>
          <div class="space-y-4">
            <div v-for="(page, index) in topPages" :key="index" 
                 class="flex items-center justify-between hover:bg-accent/5 p-2 rounded-md cursor-pointer">
              <div class="space-y-1">
                <p class="text-sm font-medium leading-none">{{ page.name }}</p>
                <p class="text-sm text-muted-foreground">{{ page.views.toLocaleString() }} views</p>
              </div>
              <div class="ml-4">
                <TrendingUp class="h-4 w-4 text-emerald-500" />
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