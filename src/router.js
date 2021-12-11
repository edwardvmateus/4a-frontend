import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from '../src/components/LogIn.vue'
import SignUp from '../src/components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App,
    
  },
  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn,
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp,
  }
    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
