<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-sm text-gray-500">Comprehensive analytics overview</p>
    </div>

    <!-- Key Metrics Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard 
        title="Total Visits" 
        :value="formatNumber(45678)" 
        :trend="12.5" 
        :icon="EyeIcon"
      />
      <StatsCard 
        title="Unique Visitors" 
        :value="formatNumber(32456)" 
        :trend="8.3" 
        :icon="UserIcon"
      />
      <StatsCard 
        title="Actions per Visit" 
        :value="3.7" 
        :trend="5.2" 
        :icon="ActivityIcon"
      />
      <StatsCard 
        title="Bounce Rate" 
        :value="'42%'" 
        :trend="-3.1" 
        :icon="BarChart2Icon"
      />
    </div>

    <!-- Charts and Detailed Insights -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <VisitorsChart />
      </div>
      <div>
        <TopPages />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StatsCard from '@/components/StatsCard.vue'
import VisitorsChart from '@/components/VisitorsChart.vue'
import TopPages from '@/components/TopPages.vue'
import { 
  Eye as EyeIcon, 
  User as UserIcon, 
  Activity as ActivityIcon, 
  BarChart2 as BarChart2Icon 
} from 'lucide-vue-next'

// Utility function to format large numbers
const formatNumber = (num: number) => {
  return num > 1000 ? (num / 1000).toFixed(1) + 'k' : num.toString()
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>