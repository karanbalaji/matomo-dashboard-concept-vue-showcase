<template>
  <div class="p-6 bg-white rounded-lg shadow-sm">
    <h2 class="text-lg font-bold mb-4">Routing Debug Information</h2>
    <div class="space-y-2">
      <div>
        <strong>Current Route:</strong> {{ $route.path }}
      </div>
      <div>
        <strong>Base URL:</strong> {{ baseUrl }}
      </div>
      <div>
        <strong>Import Meta Base URL:</strong> {{ importMetaBaseUrl }}
      </div>
      <div>
        <strong>Window Location:</strong> 
        <pre>{{ windowLocation }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const baseUrl = import.meta.env.BASE_URL
const importMetaBaseUrl = import.meta.env.BASE_URL

const windowLocation = ref({
  href: window.location.href,
  origin: window.location.origin,
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash
})

onMounted(() => {
  console.log('Debug Info:', {
    route: $route.path,
    baseUrl,
    windowLocation: windowLocation.value
  })
})
</script>
