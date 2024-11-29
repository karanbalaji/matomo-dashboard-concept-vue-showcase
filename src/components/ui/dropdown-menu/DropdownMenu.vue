<script setup lang="ts">
import { provide, ref } from 'vue'

const open = ref(false)
provide('dropdown-open', open)
</script>

<template>
  <div class="relative inline-block">
    <slot />
  </div>
</template>
