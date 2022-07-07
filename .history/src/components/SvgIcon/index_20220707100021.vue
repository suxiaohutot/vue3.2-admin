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

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em; /* 属性设置一个元素的垂直对齐方式 */
  fill: currentColor; /* 设置SVG形状的颜色 */
  overflow: hidden; /* 控制内容溢出元素框时显示的方式 */
}
</style>
