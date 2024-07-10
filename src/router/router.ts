import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import TransactionsPage from '@/views/TransactionsPage.vue'

const routes = [
  { path: '/', redirect: '/transactions' },
  { path: '/transactions', component: TransactionsPage },
  { path: '/login', component: LoginPage },
  { path: '/registration', component: () => import('../views/RegistrationPage.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router