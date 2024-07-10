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

        <VLabel
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
        </VLabel>

        <VLabel
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
        </VLabel>

        <p class="login-card__registration">
          Если у вас ещё нет аккаунта, вы можете
          <Button
            label="зарегестрироваться"
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

import VLabel from '@/components/VLabel.vue'
import { isEmail } from '@/utils/validate'

const router = useRouter()
const isFormHasError = ref(false)

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
    console.log(formData.value)
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
</style>