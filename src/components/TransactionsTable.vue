<template>
  <DataTable
    paginator
    size="small"
    table-style="min-width: 50rem"
    :rows="20"
    :striped-rows="true"
    :value="manyTransactions"
    :rows-per-page-options="[5, 10, 20, 50]"
  >
    <Column
      field="type"
      header="type"
      style="width: 25%"
    />
    <Column
      field="amount"
      header="amount"
      style="width: 25%"
    />
    <Column
      field="date"
      header="date"
      style="width: 25%"
    />
    <Column
      field="comment"
      header="comment"
      style="width: 25%"
    />
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Column from 'primevue/column'
import DataTable from 'primevue/datatable'

const transactions = ref([
  {
    id: 1,
    userID: 1,
    categoryID: 1,
    counterpartyID: 1,
    type: 'out',
    date: '2024-07-11T06:05:39.854Z',
    amount: 100,
    currency: 'rub',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    createdAt: '2024-07-11T06:05:39.854Z',
    updatedAt: '2024-07-11T06:05:39.854Z',
  }
])

const manyTransactions = new Array(20).fill(transactions.value[0])
</script>

<style>
</style>