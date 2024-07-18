<template>
  <div class="transactions-page__wrapper">
    <header class="transactions-page__header">
      <BaseTypography
        text="Транзакции"
        type="h-page"
      />
      <button :onclick="goToLogin">
        Logout
      </button>
    </header>
    <main>
      <TransactionsTableHeader />
      <TransactionsTable />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { api } from '@/api'
import BaseTypography from '@/components/BaseTypography.vue'
import TransactionsTable from '@/components/TransactionsTable.vue'
import TransactionsTableHeader from '@/components/TransactionsTableHeader.vue'
import { LocalStorageKey, removeFromLocalStorage } from '@/utils/localStorage'

import type { AxiosError } from 'axios'

const router = useRouter()

const goToLogin = () => {
  api.post('/api/v1/logout').then(() => {
    removeFromLocalStorage(LocalStorageKey.JWT_TOKEN)
    router.push('/login')
  }).catch((err: AxiosError<{ message: string }>) => {
    console.log(err.response?.data?.message || 'Internal error')
  })
}
</script>

<style scoped>
.transactions-page__wrapper {
  padding: 24px;
  height: 100vh;
  width: 100%;
}

.transactions-page__header {
  display: flex;
  justify-content: space-between;
}
</style>