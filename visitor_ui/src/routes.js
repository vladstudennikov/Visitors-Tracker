import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/HomePage'
import FormPage from '@/FormPage'


const routes = [
  { path: '/', component: HomePage },
  { path: '/add_visitor', component: FormPage }
]

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;