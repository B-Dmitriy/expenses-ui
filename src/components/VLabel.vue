<template>
  <label
    class="form-row__label"
    :for="props.for"
  >
    <span>{{ props.text }}</span>
    <slot />
    <span class="form-row__error">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
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
.form-row__error {
  min-height: 16px;
  font-size: 14px;
  color: #ff6c6c;
}
.form-row__label span {
  margin-left: 8px;
}
</style>