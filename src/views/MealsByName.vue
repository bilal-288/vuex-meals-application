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
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>
    import {
        computed,
        onMounted,
        ref
    } from "vue";

    import store from "../store";
    import YouTubeButton from "../components/YouTubeButton.vue"
    import MealItem from "../components/MealItem.vue"

    import {
        useRoute
    } from 'vue-router'

    const keyword = ref("");

    //state represents the data of your application.
    const meals = computed(() => store.state.searchedMeals);
    const route = useRoute();

    function searchMeals() {
        // action contain logic to perform tasks like making API requests
        // commit mutations to update the state
        // searchMeals is in action.js
        store.dispatch("searchMeals", keyword.value);
    }

    onMounted(() => {
        keyword.value = route.params.name;
        if (keyword.value) {
            searchMeals();
        }
    })
</script>