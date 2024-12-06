<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
    <div class="flex h-14 items-center gap-2 sm:gap-4 px-2 sm:px-6">
      <!-- Mobile Header -->
      <div class="lg:hidden flex items-center justify-between w-full">
        <!-- Matomo Interview Text -->
        <span class="text-lg font-semibold text-gray-800">Matomo Interview</span>
        
        <!-- Mobile Controls -->
        <div class="flex items-center space-x-2">
          <!-- Global Icon Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md">
              <Globe class="h-5 w-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Global Sites</DropdownMenuLabel>
              <DropdownMenuItem 
                v-for="site in websites" 
                :key="site" 
                @click="selectedWebsite = site"
              >
                {{ site }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Dashboard Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md">
              <LayoutDashboard class="h-5 w-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
              <DropdownMenuItem 
                v-for="type in viewTypes" 
                :key="type.id"
                @click="selectedView = type.id"
                :class="{ 'bg-blue-500/5': selectedView === type.id }"
              >
                {{ type.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Calendar Picker -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md">
              <Calendar class="h-5 w-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Date Navigation</DropdownMenuLabel>
              <DropdownMenuItem class="flex items-center justify-between">
                <div class="flex items-center">
                  <span>{{ currentDate }}</span>
                </div>
                <div>
                  <button class="p-1 hover:bg-blue-500/5 rounded-md">
                    <ChevronLeft class="h-4 w-4 text-blue-600/70" />
                  </button>
                  <button class="p-1 hover:bg-blue-500/5 rounded-md">
                    <ChevronRight class="h-4 w-4 text-blue-600/70" />
                  </button>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Notifications -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md transition-colors">
              <div class="relative">
                <Bell class="h-5 w-5 text-gray-600" />
                <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-600/70"></span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div class="max-h-80 overflow-y-auto">
                <DropdownMenuItem v-for="n in notifications" :key="n.id">
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">{{ n.title }}</p>
                    <p class="text-xs text-gray-500">{{ n.time }}</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <!-- Desktop Controls -->
      <div class="hidden lg:flex w-full items-center gap-2 sm:gap-4">
        <!-- Website Dropdown -->
        <DropdownMenu class="flex-grow-0">
          <DropdownMenuTrigger class="w-full sm:w-auto flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <Globe class="h-4 w-4 text-green-600/70" />
            <span class="text-green-600/70 truncate max-w-[100px] hidden sm:inline">{{ selectedWebsite }}</span>
            <ChevronDown class="h-4 w-4 text-green-600/50 ml-auto sm:ml-0" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem v-for="site in websites" :key="site" @click="selectedWebsite = site">
              {{ site }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <!-- Search Bar -->
        <div class="flex-1 min-w-[160px] sm:min-w-[200px] flex items-center gap-2 px-2 sm:px-3 py-1.5 text-sm rounded-md bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
          <Search class="h-4 w-4 text-blue-600/70" />
          <input
            type="text"
            placeholder="Search analytics..."
            class="w-full flex-1 bg-transparent outline-none placeholder:text-blue-600/50"
          />
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center gap-2">
          <!-- Notifications -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md transition-colors">
              <div class="relative">
                <Bell class="h-5 w-5 text-gray-600" />
                <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-600/70"></span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div class="max-h-80 overflow-y-auto">
                <DropdownMenuItem v-for="n in notifications" :key="n.id">
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">{{ n.title }}</p>
                    <p class="text-xs text-gray-500">{{ n.time }}</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Visit Type Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger class="px-3 py-1.5 text-sm rounded-md bg-green-500/5 hover:bg-green-500/10 transition-colors flex items-center gap-2">
              <Eye class="h-4 w-4 text-green-600/70" />
              <span class="text-green-600/70">{{ visitTypes.find(t => t.id === selectedVisitType)?.label }}</span>
              <ChevronDown class="h-4 w-4 text-green-600/50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                v-for="type in visitTypes" 
                :key="type.id"
                @click="selectedVisitType = type.id"
                :class="{ 'bg-green-500/5': selectedVisitType === type.id }"
              >
                {{ type.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- View Type Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger class="px-3 py-1.5 text-sm rounded-md bg-blue-500/5 hover:bg-blue-500/10 transition-colors flex items-center gap-2">
              <LayoutDashboard class="h-4 w-4 text-blue-600/70" />
              <span class="text-blue-600/70">{{ viewTypes.find(t => t.id === selectedView)?.label }}</span>
              <ChevronDown class="h-4 w-4 text-blue-600/50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                v-for="type in viewTypes" 
                :key="type.id"
                @click="selectedView = type.id"
                :class="{ 'bg-blue-500/5': selectedView === type.id }"
              >
                {{ type.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Settings -->
          <DropdownMenu>
            <DropdownMenuTrigger class="p-2 hover:bg-blue-500/5 rounded-md transition-colors">
              <Settings class="h-5 w-5 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User class="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2 class="h-4 w-4 mr-2" />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem class="text-red-500">
                <LogOut class="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { 
  Globe, 
  Search, 
  Bell, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  ChevronDown,
  Eye,
  Settings,
  User,
  Settings2,
  LogOut
} from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

const selectedWebsite = ref('GMAIL.COM')
const websites = ['GMAIL.COM', 'EXAMPLE.COM', 'DEMO.COM']
const currentDate = ref(new Date().toLocaleDateString())
const selectedVisitType = ref('all')
const selectedView = ref('dashboard')

const visitTypes = [
  { id: 'all', label: 'All Visits' },
  { id: 'new', label: 'New Visitors' },
  { id: 'returning', label: 'Returning Visitors' }
]

const viewTypes = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'realtime', label: 'Real-time' },
  { id: 'overview', label: 'Overview' }
]

defineEmits(['toggle-menu'])

// Sample notifications
const notifications = ref([
  {
    id: 1,
    title: 'Traffic spike detected on /products',
    time: '5 minutes ago'
  },
  {
    id: 2,
    title: 'New goal achieved: Newsletter Signups',
    time: '1 hour ago'
  },
  {
    id: 3,
    title: 'Weekly analytics report ready',
    time: '3 hours ago'
  }
])
</script>