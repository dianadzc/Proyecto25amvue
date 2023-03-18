import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import DashboardView from '../views/DashboardView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
  ]
})

export default router
