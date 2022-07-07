<template>
  <div class="login-container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
