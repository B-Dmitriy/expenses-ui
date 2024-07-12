<template>
  <h1
    v-if="props.type === 'h-page'"
    class="ex-typography__page-h"
  >
    {{ text }}
  </h1>
  <span 
    v-else-if="type === 'error'"
    class="ex-typography__error"
  >
    {{ text }}
  </span>
  <span v-else>{{ text }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'h-page' | 'error'
  text: string | undefined
}>()
</script>

<style scoped>
.ex-typography__page-h {
  font-size: 32px;
  margin-bottom: 24px;
}

.ex-typography__error {
  min-height: 16px;
  font-size: 14px;
  color: #ff6c6c;
}
</style>