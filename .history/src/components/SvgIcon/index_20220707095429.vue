<template>
  <svg class="svg-icon" aria-hidden="true">
    <user :xlink:href="iconName"></user>
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style></style>
