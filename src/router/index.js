import { isLoggedIn } from '@/auth.js'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import LoginView from '@/views/LoginView.vue'
import NewScheduleWeekView from '@/views/NewScheduleWeekView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import TeacherAssignmentsView from '@/views/TeacherAssignmentsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: LoginView },
    { path: '/forgot-password', name: 'forgot-password', component: ForgotPasswordView },
    { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboardView, meta: { requiresAuth: true } },
    { path: '/admin/schedule', name: 'admin-schedule', component: ScheduleView, meta: { requiresAuth: true } },
    { path: '/admin/schedule/new-week', name: 'new-schedule-week', component: NewScheduleWeekView, meta: { requiresAuth: true } },
    { path: '/admin/teachers', name: 'admin-teachers', component: TeacherAssignmentsView, meta: { requiresAuth: true } },
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
