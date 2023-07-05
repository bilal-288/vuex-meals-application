<template>
  <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name:'byletter', params:{letter}}" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div>
    <pre>
    {{meals}}
    </pre>
    </div>
</template>

<script setup>  
import {computed} from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(()=>store.state.mealsByLetter);

onMounted(()=>{
  store.dispatch('searchMealsByLetter', route.params.letter);
});

</script>

<style>

</style>