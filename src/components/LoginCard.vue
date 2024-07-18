<template>
  <Card>
    <template #content>
      <form
        class="login-card__form"
        @submit.prevent="submit"
      >
        <h2 class="login-card__header">
          Войти
        </h2>

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
              class="login-card__form-input"
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
            input-class="login-card__form-input"
            :feedback="false"
            :invalid="!!formErrors.password"
          />
        </BaseLabel>

        <BaseTypography
          v-if="serverError"
          type="error"
          :text="serverError"
        />

        <p class="login-card__registration">
          Если у вас ещё нет аккаунта, вы можете
          <Button
            label="зарегестрироваться"
            class="login-card__submit-btn"
            link
            @click="goToRegistration"
          />
        </p>

        <Button
          class="login-card__submit"
          type="submit"
          :disabled="isFormHasError"
        >
          Вход
        </Button>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import { api, PathAPI } from '@/api'
import { isEmail } from '@/utils/validate'
import BaseLabel from '@/components/BaseLabel.vue'
import BaseTypography from '@/components/BaseTypography.vue'
import { LocalStorageKey, setToLocalStorage } from '@/utils/localStorage'

import type { AxiosError } from 'axios'

const router = useRouter()
const isFormHasError = ref(false)
const serverError = ref('')

const goToRegistration = () => router.push('/registration')

interface FormData {
  email: string;
  password: string;
}

const formData = ref({
  email: '',
  password: '',
})

const formErrors = ref({
  email: '',
  password: '',
})

watch(formData.value, () => {
  formErrors.value = {
    email: '',
    password: '',
  }
  isFormHasError.value = false
  serverError.value = ''
})

const validateFormData = (formData: FormData) => {
  if (!isEmail(formData.email)) {
    isFormHasError.value = true
    formErrors.value.email = 'Некорректный email'
  }
}

const submit = () => {
  validateFormData(formData.value)
  if (!isFormHasError.value) {
    api.post(PathAPI.LOGIN, formData.value).then((res) => {
      setToLocalStorage<string>(LocalStorageKey.JWT_TOKEN, res.data.accessToken)
      router.push('/transactions')
    }).catch((err: AxiosError<{ message: string }>) => {
      isFormHasError.value = true
      serverError.value = err.response?.data?.message || ''
    })
  }
}

</script>

<style>
.login-card__form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  padding: 0 16px;
}

.login-card__header {
  margin-bottom: 16px;
}

.login-card__form-input {
  width: 100%;
}

.login-card__submit {
  width: 60%;
}

.login-card__registration {
  margin-top: 12px;
  margin-bottom: 24px;
  text-align: center;
}

.login-card__submit-btn.p-button {
  padding: 8px 0;
}

</style>