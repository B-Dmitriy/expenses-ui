<template>
  <div class="transactions-page__wrapper">
    <header class="transactions-page__header">
      <ExTypography
        text="Транзакции"
        type="h-page"
      />
      <button :onclick="goToLogin">
        Login redirection
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

import TransactionsTable from '@/components/TransactionsTable.vue'
import TransactionsTableHeader from '@/components/TransactionsTableHeader.vue'
import ExTypography from '@/components/ExTypography.vue'

const router = useRouter()

const goToLogin = () => router.push('/login')
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