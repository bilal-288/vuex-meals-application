<template>
    <div
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}" >
        <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
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
         <YouTubeButton  :href="meal.strYoutube">
            Youtube
            </YouTubeButton>
        </div>
      </div>
    </div>
</template>

<script setup>
    const {
        meal
    } = defineProps({
        meal: {
            required: true,
            type: Object
        }

    })
</script>