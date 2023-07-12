//here the mutation is called
//Mutations are the only way to modify the state in Vuex.

import axiosClient from '../axiosClient.js'
export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}
export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
        })
}
export function searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
        .then(({ data }) => {
            commit('setMealsByIngredients', data.meals)
        })
}