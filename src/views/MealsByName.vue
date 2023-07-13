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

 <Meals :meals="meals" />
</template>

<script setup>
    import {
        computed,
        onMounted,
        ref
    } from "vue";

    import store from "../store";
    import Meals from "../components/Meals.vue"

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
        if (keyword.value) {
            store.dispatch("searchMeals", keyword.value);
        } else {
            store.commit("setSearchedMeals", []);
        }

    }

    onMounted(() => {
        keyword.value = route.params.name;
        if (keyword.value) {
            searchMeals();
        }
    })
</script>