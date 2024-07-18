export enum LocalStorageKey {
    JWT_TOKEN = 'auth',
}

export function setToLocalStorage<T>(key: LocalStorageKey, data: T) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(key, dataString)
}

export function getFromLocalStorage<T>(key: LocalStorageKey): T | null {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return null
}

export function removeFromLocalStorage(key: LocalStorageKey) {
  localStorage.removeItem(key)
}
