<template>
  <div class="flex h-screen bg-background">
    <!-- Desktop Sidebar -->
    <div class="hidden lg:block">
      <Sidebar />
    </div>

    <!-- Mobile Navigation -->
    <Sheet :open="isOpen" @update:open="isOpen = $event">
      <SheetTrigger asChild class="lg:hidden">
        <button class="fixed top-4 left-4 p-2 rounded-md hover:bg-accent">
          <Menu class="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" class="p-0 w-64">
        <Sidebar />
      </SheetContent>
    </Sheet>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <MenuBar @toggle-menu="isOpen = !isOpen" />
      <main class="flex-1 overflow-y-auto p-4 lg:p-8">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import Sheet from '@/components/ui/sheet/Sheet.vue'
import SheetContent from '@/components/ui/sheet/SheetContent.vue'
import SheetTrigger from '@/components/ui/sheet/SheetTrigger.vue'
import Sidebar from '@/components/ui/sidebar/Sidebar.vue'
import MenuBar from '@/components/MenuBar.vue'

const router = useRouter()
const isOpen = ref(false)

onMounted(() => {
  // If we're at the root showcase URL, ensure dashboard is shown
  if (window.location.pathname === '/matomo-dashboard-concept-vue-showcase/') {
    router.push('/')
  }
})
</script>