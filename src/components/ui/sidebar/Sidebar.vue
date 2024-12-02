<template>
  <nav
    :class="[
      'flex flex-col h-screen',
      'border-r bg-background',
      expanded ? 'w-60' : 'w-14',
      'transition-all duration-300 ease-in-out'
    ]"
  >
    <div class="h-14 flex items-center justify-between px-3 border-b">
      <div v-if="expanded" class="flex items-center gap-2">
        <span class="font-semibold">Matomo Interview</span>
      </div>
      <button
        @click="expanded = !expanded"
        class="h-6 w-6 flex items-center justify-center rounded-md hover:bg-accent"
      >
        <ChevronLeft v-if="expanded" class="h-4 w-4" />
        <ChevronRight v-else class="h-4 w-4" />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto">
      <div class="space-y-1 p-2">
        <router-link
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          :class="[
            'flex items-center gap-3 rounded-md px-2 py-1.5',
            'text-sm font-medium',
            'hover:bg-accent hover:text-accent-foreground',
            'transition-colors duration-200',
            $route.path === item.to ? 'bg-accent/50' : ''
          ]"
        >
          <component :is="item.icon" class="h-4 w-4" />
          <span v-if="expanded">{{ item.label }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  Activity,
  MousePointer,
  Target,
  Map,
  ShoppingCart,
  Filter,
  FileText,
  Film,
  TestTube2,
  LineChart,
  Video,
  BarChart3
} from 'lucide-vue-next'

const expanded = ref(true)
const route = useRoute()

const items = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    to: '/'
  },
  {
    label: 'Visitors',
    icon: Users,
    to: '/visitors'
  },
  {
    label: 'Behaviour',
    icon: MousePointer,
    to: '/behaviour'
  },
  {
    label: 'Acquisition',
    icon: Filter,
    to: '/acquisition'
  },
  {
    label: 'Ecommerce',
    icon: ShoppingCart,
    to: '/ecommerce'
  },
  {
    label: 'Goals',
    icon: Target,
    to: '/goals'
  },
  {
    label: 'Funnels',
    icon: Filter,
    to: '/funnels'
  },
  {
    label: 'Forms',
    icon: FileText,
    to: '/forms'
  },
  {
    label: 'Media',
    icon: Film,
    to: '/media'
  },
  {
    label: 'A/B Tests',
    icon: TestTube2,
    to: '/ab-tests'
  },
  {
    label: 'Heatmaps',
    icon: LineChart,
    to: '/heatmaps'
  },
  {
    label: 'Session Recordings',
    icon: Video,
    to: '/session-recordings'
  },
  {
    label: 'Custom Reports',
    icon: BarChart3,
    to: '/custom-reports'
  }
]
</script>
