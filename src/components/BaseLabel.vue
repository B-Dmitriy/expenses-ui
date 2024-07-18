<template>
  <label
    class="form-row__label"
    :for="props.for"
  >
    <span>{{ props.text }}</span>
    <slot />
    <BaseTypography
      type="error" 
      :text="error" 
    />
  </label>
</template>

<script setup lang="ts">
import BaseTypography from './BaseTypography.vue'
const props = defineProps<{
  for: string
  text: string
  error?: string
}>()
</script>

<style scoped>
.form-row__label {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-row__label span {
  margin-left: 8px;
}
</style>