<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="box"></div>
  <router-view />
</template>

<script setup>
const boxWidth = '100px'
</script>
<style lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
