import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills'
import Projects from '../views/Projects'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
