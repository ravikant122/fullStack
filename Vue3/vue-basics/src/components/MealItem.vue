<template>
  <div class="meal-container">
    <div class="meal-img-container">
      <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-img" />
      </router-link>
    </div>
    <div class="meal-description">
      <h3 class="meal-heading">{{ meal.strMeal }}</h3>
      <div class="meal-recipe">{{ meal.strInstructions }}</div>
      <YoutubeButton :href="meal.strYoutube" />
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'
import { defineProps } from 'vue'

const props = defineProps({
  meal: Object
})
</script>

<style scoped>
.meal-container {
  height: 100%;
  border-width: 1px;
  border-radius: 16px;
  /* border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px; */
  box-shadow: 0 2px 2px -1px rgb(0 0 0 / 0.1);
  background-color: white;
  transition: transform 0.5s ease;
}

.meal-container:hover {
  transform: translateY(-10px);
}

.meal-img {
  height: 192px;
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  transition: transform 0.5s ease;
}

.meal-img-container {
  overflow: hidden;
}

.meal-img:hover {
  transform: scale(1.1);
}

.meal-description {
  padding: 12px;
}

.meal-heading {
  font-weight: 600;
}

.meal-recipe {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 1rem;
}
</style>
