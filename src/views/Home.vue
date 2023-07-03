<template>
<!-- /** 
  <h1>{{meals}}</h1> 
  */ -->
<div class="flex flex-col p-8">
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name:'byletter', params:{letter}}" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
</div>
</template>

<script setup>
//here's no need to explicitly define export default, data, or methods with setup syntax
    import { ref, computed, onMounted} from 'vue';
    import store from '../store'
    import axiosClient from '../axiosClient.js'

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let ingredients = ref([]);

    onMounted(
     async () =>{
        const response= await axiosClient.get('/list.php?i=list');
        console.log(response)
        ingredients.value = response.data;
      }
    )
</script>

<style>

</style>