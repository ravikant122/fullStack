<template>
  <div class="meal-details-container">
    <div class="meal-heading">{{ meal.strMeal }}</div>
    <div class="meal-img-container">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-img" />
    </div>
    <div class="category-container">
      <div><strong>Category: </strong>{{ meal.strCategory }}</div>
      <div><strong>Area: </strong>{{ meal.strArea }}</div>
      <div v-if="meal.strTags" class="tags-line-clamp">
        <strong>Tags: </strong>{{ meal.strTags }}
      </div>
    </div>
    <div>{{ meal.strInstructions }}</div>
    <div v-if="Object.keys(meal).length" class="ingredients-measures-grid">
      <div>
        <h1 class="ingredient-heading">Ingredients</h1>
        <ul>
          <template v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`].trim()">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h1 class="ingredient-heading">Measures</h1>
        <ul>
          <template v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`].trim()">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div>
      <YoutubeButton :href="meal.strYoutube" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute()
const meal = ref({})
onMounted(async () => {
  try {
    const { data } = await axios.get(`lookup.php?i=${route.params.id}`)
    meal.value = data.meals[0]
  } catch (e) {
    console.error('error which meal details, id: ', route.params.id)
  }
})
</script>

<style scoped>
.meal-details-container {
  width: 700px;
  margin: auto;
  padding: 2rem 0;
}

/* div.parent-div > div is for direct childs of parent childs
  div.parent-div div means all divs inside parent div
 */
div.meal-details-container > div {
  margin-bottom: 16px;
}

.meal-heading {
  font-size: xx-large;
  font-weight: 700;
  color: rgb(249 115 22);
}

.meal-img {
  max-width: 700px;
  transition: transform 0.5s ease;
}
.meal-img:hover {
  transform: scale(1.05);
}

.meal-img-container {
  overflow: hidden;
}

.tags-line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.ingredients-measures-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.ingredient-heading {
  font-size: 1.5rem;
  font-weight: 600;
}

.category-container > div {
  margin-bottom: 8px;
}
</style>
