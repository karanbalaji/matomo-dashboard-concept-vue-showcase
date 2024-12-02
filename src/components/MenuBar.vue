<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex h-14 items-center gap-4 px-4 sm:px-6">
      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 hover:bg-accent rounded-md"
        @click="$emit('toggle-menu')"
      >
        <Menu class="h-5 w-5" />
      </button>

      <!-- Search -->
      <div class="flex-1 flex items-center gap-4">
        <div class="w-full max-w-sm flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-accent/10">
          <Search class="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search analytics..."
            class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>

        <!-- Website Selector -->
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-accent/10">
            <Globe class="h-4 w-4" />
            <span>{{ selectedWebsite }}</span>
            <ChevronDown class="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem v-for="site in websites" :key="site" @click="selectedWebsite = site">
              {{ site }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <!-- Date Navigation -->
        <div class="flex items-center gap-2">
          <button class="p-1.5 hover:bg-accent rounded-md">
            <ChevronLeft class="h-4 w-4" />
          </button>
          <button class="px-3 py-1.5 text-sm rounded-md bg-accent/10 flex items-center gap-2">
            <Calendar class="h-4 w-4" />
            <span>{{ currentDate }}</span>
          </button>
          <button class="p-1.5 hover:bg-accent rounded-md">
            <ChevronRight class="h-4 w-4" />
          </button>
        </div>

        <!-- View Controls -->
        <div class="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger class="px-3 py-1.5 text-sm rounded-md bg-accent/10 flex items-center gap-2">
              <Eye class="h-4 w-4" />
              <span>{{ visitTypes.find(t => t.id === selectedVisitType)?.label }}</span>
              <ChevronDown class="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                v-for="type in visitTypes" 
                :key="type.id"
                @click="selectedVisitType = type.id"
                :class="{ 'bg-accent/50': selectedVisitType === type.id }"
              >
                {{ type.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger class="px-3 py-1.5 text-sm rounded-md bg-accent/10 flex items-center gap-2">
              <LayoutDashboard class="h-4 w-4" />
              <span>{{ viewTypes.find(t => t.id === selectedView)?.label }}</span>
              <ChevronDown class="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                v-for="type in viewTypes" 
                :key="type.id"
                @click="selectedView = type.id"
                :class="{ 'bg-accent/50': selectedView === type.id }"
              >
                {{ type.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <!-- Right Side Icons -->
      <div class="flex items-center gap-2">
        <!-- Notifications -->
        <DropdownMenu>
          <DropdownMenuTrigger class="p-2 hover:bg-accent rounded-md">
            <div class="relative">
              <Bell class="h-5 w-5" />
              <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div class="max-h-80 overflow-y-auto">
              <DropdownMenuItem v-for="n in notifications" :key="n.id">
                <div class="flex flex-col gap-1">
                  <p class="text-sm font-medium">{{ n.title }}</p>
                  <p class="text-xs text-muted-foreground">{{ n.time }}</p>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <!-- Settings -->
        <DropdownMenu>
          <DropdownMenuTrigger class="p-2 hover:bg-accent rounded-md">
            <Settings class="h-5 w-5" />
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
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Menu, 
  Search, 
  Bell, 
  Settings, 
  User, 
  Settings2, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ChevronDown,
  Globe,
  Eye,
  LayoutDashboard
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
const currentDate = ref('2024-12-01')
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

// Sample notifications - replace with real data
const notifications = [
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
]
</script>
