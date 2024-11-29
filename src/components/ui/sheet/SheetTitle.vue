<template>
  <DialogTitle :class="['text-lg font-semibold leading-none tracking-tight', className]">
    <slot />
  </DialogTitle>
</template>

<script lang="ts" setup>
import { DialogTitle } from 'radix-vue'

defineProps<{
  className?: string
}>()</script>
