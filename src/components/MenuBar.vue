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
      <div class="flex-1 flex items-center">
        <div class="w-full max-w-sm flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-accent/10">
          <Search class="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search analytics..."
            class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
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
import { Menu, Search, Bell, Settings, User, Settings2, LogOut } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

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

defineEmits(['toggle-menu'])
</script>
