<template>
  123
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <el-icon :size="20" class="svg-container"><Avatar /></el-icon>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-icon :size="20"><Avatar /></el-icon>
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({
  name: ''
})
</script>

<style lang="scss" scoped></style>
