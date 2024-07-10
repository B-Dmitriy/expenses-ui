<template>
  <section class="registration-page__wrapper">
    <RegistrationCard />
  </section>
</template>

<script setup lang="ts">
import RegistrationCard from '@/components/RegistrationCard.vue'
</script>

<style scoped>
.registration-page__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>