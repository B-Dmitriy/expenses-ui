import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { getFromLocalStorage, LocalStorageKey } from '@/utils/localStorage'

export const api: AxiosInstance = axios.create({
  baseURL: APP_URL,
})

api.interceptors.request.use((config) => {
  const token = getFromLocalStorage<string>(LocalStorageKey.JWT_TOKEN)
  if (token !== null) {
    config.headers.Authorization = `Basic ${token}`
  }
  return config
})
