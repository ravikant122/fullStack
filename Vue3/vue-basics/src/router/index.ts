import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/meal/:id',
        name: 'meal',
        component: MealDetails
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
