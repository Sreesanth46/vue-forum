import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
