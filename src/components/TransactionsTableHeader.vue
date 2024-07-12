<template>
  <header class="transaction-table__header">
    <Button
      label="Добавить транзакцию"
      icon="pi pi-plus"
      severity="primary"
      @click="showAddModal"
    />
  </header>
  <TransactionsAddDialog 
    v-if="isAddModalShow" 
    @hide="hideAddModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'

import TransactionsAddDialog from '@/components/TransactionsAddDialog.vue'

const isAddModalShow = ref(false)

const showAddModal = () => isAddModalShow.value = true
const hideAddModal = () => isAddModalShow.value = false
</script>

<style scoped>
.transaction-table__header {
  padding: 8px 0 16px;
}
</style>