<template>
  <div class="bg-card rounded-lg p-4 shadow">
    <div class="mb-4">
      <h3 class="text-lg font-semibold">Visitors Over Time</h3>
      <p class="text-sm text-muted-foreground">Last 30 days of visitor activity</p>
    </div>
    <div class="h-[300px] w-full">
      <Line
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
import { Line } from 'vue-chartjs'

// Register ChartJS components
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

// Generate sample data
const generateVisitorData = () => {
  const baseVisitors = 1000
  const days = 30
  const data = []
  const labels = []

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
    
    // Generate random visitor count with trend and weekly pattern
    const trend = Math.sin(i / 7) * 200 // Weekly pattern
    const random = Math.random() * 300 - 150 // Random variation
    const dayOfWeek = date.getDay()
    const weekendDip = dayOfWeek === 0 || dayOfWeek === 6 ? -200 : 0 // Weekend dip
    
    data.push(Math.max(0, Math.round(baseVisitors + trend + random + weekendDip)))
  }

  return { data, labels }
}

const { data: visitorData, labels } = generateVisitorData()

const chartData = {
  labels,
  datasets: [
    {
      label: 'Visitors',
      data: visitorData,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)', // Light blue background
      borderColor: 'rgb(59, 130, 246)', // Blue line
      tension: 0.4,
      pointRadius: 2,
      pointHoverRadius: 5
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        callback: (value) => value.toLocaleString()
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgb(255, 255, 255)',
      bodyColor: 'rgb(255, 255, 255)',
      padding: 12,
      displayColors: false,
      callbacks: {
        label: (context) => `${context.parsed.y.toLocaleString()} visitors`
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  }
}
</script>
