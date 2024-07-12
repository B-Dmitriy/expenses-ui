<template>
  <Dialog
    v-model:visible="visible"
    header="Добавить транзакцию"
    modal
    @hide="onHide"
  >
    <div>TODO...</div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Dialog from 'primevue/dialog'

const emits = defineEmits(['hide'])

const onHide = () => emits('hide')

const visible = ref(true)
</script>