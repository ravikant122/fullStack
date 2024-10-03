<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-sm h-16 px-16 flex justify-between items-center">
      <router-link :to="{ name: 'home' }"> Home </router-link>
      <div class="h-full right-navbar-links">
        <router-link :to="{ name: 'byName' }"> Search Meals </router-link>
        <router-link :to="{ name: 'byLetter' }"> Meals by letter </router-link>
        <router-link :to="{ name: 'byIngredient' }"> Meals by Ingredients </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* to assign style to all childrens * */
.right-navbar-links * {
  padding: 0px 16px;
  height: 100%;
  /* to center the route's name, we've to change display from inline to inline-flex and
    use items-center */
  display: inline-flex;
  align-items: center;
}

.right-navbar-links *:hover {
  background-color: rgb(224, 230, 230);
}
</style>
