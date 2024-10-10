<template>
  <div class="container">
    <div class="search-bar-container">
      <div class="search-heading">Search for Meals</div>
      <input
        type="text"
        v-model="keyword"
        placeholder="Search Meals"
        @change="searchMeals"
        class="search-bar"
      />
    </div>
    <div class="main-content-container">
      <template v-for="meal of meals" :key="meal.idMeal">
        <MealItem :meal="meal" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<style scoped>
.container {
  width: 75%;
  margin: 1rem auto;
}

.search-heading {
  font-weight: bold;
  font-size: 2rem;
  color: rgb(249 115 22);
}

.search-bar-container {
  margin-bottom: 1.5rem;
}

.search-bar {
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  /*
    box-shadow: x-offset y-offset  blur-radius spread-radius color
    x-offset means  how much the shadow is in the right
    y-offset  means how much the shadow is in the bottom
    blur-radius  means how much the shadow is blurred
    spread-radius means  how much the shadow is spread

    rgb (red, green, blue, opacity(transparancy))
   */
  box-shadow: 0px 4px 4px -1px rgb(0 0 0 / 0.1);
  padding: 0.5rem;
}

.search-bar:focus {
  outline: none;
  border-color: rgb(38, 117, 207);
}

.main-content-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
