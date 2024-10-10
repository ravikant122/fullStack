<template>
  <div class="meal-link-btn">
    <a :href="href" target="_blank">Youtube</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  href: String
})
</script>

<style scoped>
.meal-link-btn {
  cursor: pointer;
  padding: 8px;
  border: 1px solid red;
  border-radius: 4px;
  background-color: rgb(249 115 22);
  width: fit-content;
  color: white;
}
</style>
