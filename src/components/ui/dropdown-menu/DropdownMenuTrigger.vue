<script setup lang="ts">
import { inject } from 'vue'

const open = inject('dropdown-open')

const toggle = () => {
  if (open) {
    open.value = !open.value
  }
}
</script>

<template>
  <div @click="toggle">
    <slot />
  </div>
</template>
