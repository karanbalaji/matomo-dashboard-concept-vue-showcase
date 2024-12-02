<template>
  <div class="p-6 bg-white rounded-lg shadow-sm">
    <div class="mb-4">
      <h3 class="text-lg font-medium">Top Pages</h3>
      <p class="text-sm text-gray-500">Most visited pages in the last 30 days</p>
    </div>
    <div class="space-y-4">
      <div 
        v-for="(page, index) in topPages" 
        :key="page.url" 
        class="flex items-center justify-between border-b pb-2 last:border-b-0"
      >
        <div class="flex items-center space-x-3">
          <span class="text-sm font-medium text-gray-500">{{ index + 1 }}</span>
          <div>
            <div class="text-sm font-medium">{{ page.title }}</div>
            <div class="text-xs text-gray-500 truncate max-w-[200px]">{{ page.url }}</div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium">{{ page.views.toLocaleString() }}</span>
          <span class="text-xs text-gray-500">views</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const topPages = [
  { 
    title: 'Dashboard', 
    url: '/dashboard', 
    views: 15420,
    trend: 12.5
  },
  { 
    title: 'Analytics Overview', 
    url: '/analytics', 
    views: 12350,
    trend: 8.3
  },
  { 
    title: 'User Management', 
    url: '/users', 
    views: 8760,
    trend: 5.2
  },
  { 
    title: 'Reports', 
    url: '/reports', 
    views: 6540,
    trend: -3.1
  },
  { 
    title: 'Settings', 
    url: '/settings', 
    views: 3210,
    trend: 2.7
  }
]
</script>
