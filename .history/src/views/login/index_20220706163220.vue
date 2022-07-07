<template>
  123
  <div class="login-container">
    <el-form :model="form" v-model="form">
      <el-form-item>
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({})
</script>

<style lang="scss" scoped></style>
