import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetter
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealsByName
  },
  {
    path: '/by-ingredient/:ingredient?',
    name: 'byIngredient',
    component: MealsByIngredient
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
