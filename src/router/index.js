import { createRouter, createWebHistory } from 'vue-router'
import Brands from '@/views/Brands.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Brands
    },
  ]
})

export default router
