// Simple hardcoded auth store using localStorage

export const ADMIN_ACCOUNT = {
  email: 'admin@gmail.com',
  password: 'Admin@1234',
  name: 'Admin Portal',
  role: 'Admin Portal',
  avatar: null
}

export function login(email, password) {
  if (email === ADMIN_ACCOUNT.email && password === ADMIN_ACCOUNT.password) {
    localStorage.setItem('cit_user', JSON.stringify({ email, name: ADMIN_ACCOUNT.name, role: ADMIN_ACCOUNT.role }))
    return true
  }
  return false
}

export function logout() {
  localStorage.removeItem('cit_user')
}

export function getUser() {
  const raw = localStorage.getItem('cit_user')
  return raw ? JSON.parse(raw) : null
}

export function isLoggedIn() {
  return !!getUser()
}
