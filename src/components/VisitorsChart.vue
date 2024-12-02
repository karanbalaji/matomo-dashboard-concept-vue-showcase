<template>
  <div class="p-6 bg-white rounded-lg shadow-sm">
    <div class="mb-4">
      <h3 class="text-lg font-medium">Visitors Over Time</h3>
      <p class="text-sm text-gray-500">Last 30 days of visitor activity</p>
    </div>
    <div class="h-[300px]">
      <Line
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Generate last 30 days with more realistic data pattern
const generateVisitorData = () => {
  const baseVisitors = 1000
  const labels = []
  const data = []

  for (let i = 29; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    
    // Create a more realistic data pattern with weekly trends
    const dayOfWeek = date.getDay()
    const weekendMultiplier = dayOfWeek === 0 || dayOfWeek === 6 ? 1.5 : 1
    const weeklyTrend = Math.sin(i / 7) * 200
    const randomVariation = Math.random() * 100 - 50

    const visitors = Math.max(0, Math.round(
      baseVisitors + 
      weeklyTrend * weekendMultiplier + 
      randomVariation
    ))

    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
    data.push(visitors)
  }

  return { labels, data }
}

const { labels, data: visitorData } = generateVisitorData()

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Visitors',
      data: visitorData,
      fill: true,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      }
    }
  }
}
</script>
