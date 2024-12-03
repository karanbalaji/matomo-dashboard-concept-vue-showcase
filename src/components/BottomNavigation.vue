<template>
  <nav 
    class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 
           lg:hidden flex justify-between items-center py-2 px-4 space-x-2"
  >
    <!-- Hamburger Menu to Open Sidebar -->
    <button 
      @click="toggleSidebar" 
      class="p-2 rounded-lg hover:bg-blue-50 transition-colors"
    >
      <Menu class="h-6 w-6 text-gray-600" />
    </button>

    <!-- Search Bar -->
    <div class="flex-1 flex items-center gap-2 px-2 py-1.5 text-sm rounded-md bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
      <Search class="h-5 w-5 text-blue-600/70" />
      <input
        type="text"
        placeholder="Search analytics..."
        class="w-full flex-1 bg-transparent outline-none placeholder:text-blue-600/50"
        v-model="searchQuery"
        @input="performSearch"
      />
    </div>

    <!-- More Options -->
    <button 
      @click="openMoreMenu" 
      class="p-2 rounded-lg hover:bg-blue-50 transition-colors"
    >
      <MoreVertical class="h-6 w-6 text-gray-600" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Menu, 
  Search, 
  MoreVertical 
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const emit = defineEmits(['toggle-menu'])
const router = useRouter()

const searchQuery = ref('')

const toggleSidebar = () => {
  emit('toggle-menu')
}

const performSearch = () => {
  // TODO: Implement actual search functionality
  console.log('Searching for:', searchQuery.value)
}

const openMoreMenu = () => {
  // TODO: Implement more options menu
  console.log('Open More Options')
}
</script>

<style scoped>
/* Ensure bottom navigation is only visible on mobile */
@media (min-width: 1024px) {
  nav {
    display: none;
  }
}
</style>
