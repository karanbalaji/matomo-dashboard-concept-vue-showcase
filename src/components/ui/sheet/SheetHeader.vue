<template>
  <div :class="['flex flex-col space-y-2 text-center sm:text-left', className]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  className?: string
}>()</script>
