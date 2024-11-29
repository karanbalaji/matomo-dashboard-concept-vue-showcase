<template>
  <div :class="asChild ? '' : 'inline-flex'" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  asChild?: boolean
}>()
</script>
