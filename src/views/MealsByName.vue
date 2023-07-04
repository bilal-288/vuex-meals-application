<template>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/" >
        <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />

      </router-link>
      <div class="px-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          The vibrant colors of the sunset painted the sky with a mesmerizing
          palette of oranges, pinks, and purples, creating a breathtaking scene
        </p>
        <div class="flex items-center justify-between">
          <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white bg-red-500 hover:bg-red-600 hover:text-white ">Youtube</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {
        computed,
        ref
    } from "vue";

    import store from "../store";
    const keyword = ref("");

    //state represents the data of your application.
    const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
        // action contain logic to perform tasks like making API requests
        // commit mutations to update the state
        // searchMeals is in action.js
        store.dispatch("searchMeals", keyword.value);
    }
</script>