<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <DialogRoot v-bind="$attrs">
    <slot />
  </DialogRoot>
</template>

<script setup>
import { DialogRoot } from 'radix-vue'
</script>
