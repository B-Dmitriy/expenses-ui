<template>
  <Card>
    <template #content>
      <form
        class="registration-card__form"
        @submit.prevent="submit"
      >
        <h2 class="registration-card__header">
          Регистрация
        </h2>

        <BaseLabel
          for="login"
          text="Логин"
          :error="formErrors.login"
        >
          <IconField>
            <InputIcon class="pi pi-user" />
            <InputText
              id="login"
              v-model.trim="formData.login"
              :style="{ width: '100%' }"
              :invalid="!!formErrors.login"
            />
          </IconField>
        </BaseLabel>

        <BaseLabel
          for="login"
          text="Почта"
          :error="formErrors.email"
        >
          <IconField>
            <InputIcon class="pi pi-envelope" />
            <InputText
              id="email"
              v-model.trim="formData.email"
              :style="{ width: '100%' }"
              :invalid="!!formErrors.email"
            />
          </IconField>
        </BaseLabel>

        <BaseLabel
          for="password"
          text="Пароль"
          :error="formErrors.password"
        >
          <Password
            id="password"
            v-model.trim="formData.password"
            toggle-mask
            class="registration-card__password"
            prompt-label="Ожидание ввода..."
            weak-label="Простой пароль"
            medium-label="Пароль средней сложности"
            strong-label="Надёжный пароль"
            :input-style="{ width: '100%'}"
            :invalid="!!formErrors.password"
          />
        </BaseLabel>

        <BaseLabel
          for="repeat-password"
          text="Повторите пароль"
          :error="formErrors.repeatPassword"
        >
          <Password
            id="repeat-password"
            v-model.trim="formData.repeatPassword"
            toggle-mask
            class="registration-card__password"
            :feedback="false"
            :input-style="{ width: '100%'}"
            :invalid="!!formErrors.repeatPassword"
          />
        </BaseLabel>

        <BaseTypography
            v-if="serverError"
            type="error"
            :text="serverError"
        />

        <section class="registration-card__buttons">
          <Button
            severity="secondary"
            @click="router.back"
          >
            Отмена
          </Button>
          <Button
            type="submit"
            :disabled="isFormHasError"
          >
            Зарегистрироваться
          </Button>
        </section>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import Card from 'primevue/card'
import Button from 'primevue/button'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'

import { api, PathAPI } from '@/api'
import BaseLabel from '@/components/BaseLabel.vue'
import { isEmail, shorterThan } from '@/utils/validate'
import type { AxiosError } from 'axios'
import BaseTypography from '@/components/BaseTypography.vue'

const router = useRouter()

const isFormHasError = ref(false)
const serverError = ref('')

interface FormData {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const formData = ref({
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
})

const formErrors = ref({
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
})

watch(formData.value, () => {
  formErrors.value = {
    login: '',
    email: '',
    password: '',
    repeatPassword: '',
  }
  isFormHasError.value = false
  serverError.value = ''
})

const validateFormData = (formData: FormData) => {
  if (shorterThan(formData.login, 2)) {
    isFormHasError.value = true
    formErrors.value.login = 'Минимальная длина логина 2 символа'
  }

  if (!isEmail(formData.email)) {
    isFormHasError.value = true
    formErrors.value.email = 'Некорректный email'
  }

  if (shorterThan(formData.password, 4)) {
    isFormHasError.value = true
    formErrors.value.password = 'Минимальная длина пароль 4 символа'
  }

  if (formData.repeatPassword !== formData.password) {
    isFormHasError.value = true
    formErrors.value.repeatPassword = 'Пароли не совпадают'
  }
}

const submit = () => {
  validateFormData(formData.value)
  if (!isFormHasError.value) {
    api.post(PathAPI.REGISTRATION, formData.value).then(() => {
      router.push('/login')
    }).catch((err: AxiosError<{ message: string }>) => {
      isFormHasError.value = true
      serverError.value = err.response?.data?.message || ''
    })
  }
}

</script>

<style scoped>
.registration-card__form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  padding: 0 16px;
}

.registration-card__header {
  margin-bottom: 16px;
}

.registration-card__password {
  width: 100%;
}

.registration-card__buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
}
</style>