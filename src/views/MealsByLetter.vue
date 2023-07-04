<template>
  <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name:'byletter', params:{letter}}" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
</template>

<script setup>  
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
</script>

<style>

</style>