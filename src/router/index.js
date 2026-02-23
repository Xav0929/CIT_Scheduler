import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import NewScheduleWeekView from '@/views/NewScheduleWeekView.vue'
import { isLoggedIn } from '@/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: LoginView },
    { path: '/forgot-password', name: 'forgot-password', component: ForgotPasswordView },
    { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboardView, meta: { requiresAuth: true } },
    { path: '/admin/schedule', name: 'admin-schedule', component: ScheduleView, meta: { requiresAuth: true } },
    { path: '/admin/schedule/new-week', name: 'new-schedule-week', component: NewScheduleWeekView, meta: { requiresAuth: true } },
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next('/')
  } else {
    next()
  }
})

export default router
