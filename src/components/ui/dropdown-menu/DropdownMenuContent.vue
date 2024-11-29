<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  align?: 'start' | 'end' | 'center'
}>()

const open = inject('dropdown-open')
const contentRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (contentRef.value && !contentRef.value.contains(event.target as Node)) {
    if (open) {
      open.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    v-if="open"
    ref="contentRef"
    class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
    :class="{
      'right-0': align === 'end',
      'left-1/2 -translate-x-1/2': align === 'center',
      'left-0': align === 'start' || !align
    }"
  >
    <slot />
  </div>
</template>
