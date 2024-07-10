<template>
  <section class="not-found-page__wrapper">
    <Card class="not-found-page__modal">
      <template #content>
        <h3 class="not-found-page__modal_header">
          Ошибка 404
        </h3>
        <p>
          Страница которую вы запрашиваете не найдена.
          Возможно она устарела, была удалена или был введен неверный адрес в адресной строке.
        </p>

        <Button
          link
          class="not-found-page__modal_link"
          @click="goToMain"
        >
          На главную
        </Button>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'

const router = useRouter()

const goToMain = () => router.push('/transactions')

</script>

<style scoped>
.not-found-page__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.not-found-page__modal {
  position: relative;
  min-height: 200px;
  max-width: 540px;
}

.not-found-page__modal_header {
  font-size: 24px;
  margin-bottom: 16px;
}

.not-found-page__modal_link {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
}
</style>