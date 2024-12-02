<template>
  <div class="p-6 bg-white rounded-lg shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
      <component :is="icon" class="w-4 h-4 text-gray-400" />
    </div>
    <div class="flex items-end gap-2">
      <div class="text-2xl font-semibold">{{ value }}</div>
      <div :class="[
        'text-sm',
        trend > 0 ? 'text-green-500' : trend < 0 ? 'text-red-500' : 'text-gray-500'
      ]">
        {{ trend > 0 ? '+' : '' }}{{ trend }}% vs last period
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  value: string | number
  trend: number
  icon: any
}>()
</script>
