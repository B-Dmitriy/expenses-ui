<template>
  TransactionsPage
  <button :onclick="goToLogin">
    Login redirection
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => router.push('/login')
</script>
