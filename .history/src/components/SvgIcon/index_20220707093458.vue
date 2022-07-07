<template>
  <svg class="svg-icon" aria-hidden="true">
    <user :xlink:href="icon"></user>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<style></style>
