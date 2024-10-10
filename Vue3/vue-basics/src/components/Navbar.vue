<template>
  <header class="bg-white h-16 px-16 flex justify-between items-center header-class">
    <router-link :to="{ name: 'home' }" class="heading">Search Meals</router-link>
  </header>
</template>

<style>
.heading {
  color: rgb(249 115 22);
  font-weight: 400;
  font-size: larger;
}
</style>
