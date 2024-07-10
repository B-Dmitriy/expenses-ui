<template>
  <section class="login-page__wrapper">
    <LoginCard />
  </section>
</template>

<script setup lang="ts">
import LoginCard from '@/components/LoginCard.vue'
</script>

<style scoped>
.login-page__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>